from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from datetime import datetime, timedelta, timezone
import bcrypt
import jwt
import uuid

JWT_SECRET = "change-me-in-production"
JWT_ALGORITHM = "HS256"
JWT_EXPIRATION_HOURS = 168

app = FastAPI(title="ViteAuto API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

users = []

class UserCreate(BaseModel):
    email: EmailStr
    password: str
    name: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str

def hash_password(password: str) -> str:
    return bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()

def verify_password(password: str, hashed: str) -> bool:
    return bcrypt.checkpw(password.encode(), hashed.encode())

def create_token(user_id: str) -> str:
    payload = {"user_id": user_id, "exp": datetime.now(timezone.utc) + timedelta(hours=JWT_EXPIRATION_HOURS)}
    return jwt.encode(payload, JWT_SECRET, algorithm=JWT_ALGORITHM)

@app.get("/")
def root():
    return {"message": "ViteAuto backend running"}

@app.post("/api/auth/register")
def register(user_data: UserCreate):
    if any(u["email"] == user_data.email for u in users):
        raise HTTPException(status_code=400, detail="Email already registered")
    user_id = f"user_{uuid.uuid4().hex[:12]}"
    user = {
        "user_id": user_id,
        "email": user_data.email,
        "password": hash_password(user_data.password),
        "name": user_data.name,
        "created_at": datetime.now(timezone.utc).isoformat()
    }
    users.append(user)
    token = create_token(user_id)
    safe_user = {k: v for k, v in user.items() if k != "password"}
    return {"token": token, "user": safe_user}

@app.post("/api/auth/login")
def login(login_data: UserLogin):
    user = next((u for u in users if u["email"] == login_data.email), None)
    if not user or not verify_password(login_data.password, user["password"]):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    token = create_token(user["user_id"])
    safe_user = {k: v for k, v in user.items() if k != "password"}
    return {"token": token, "user": safe_user}

@app.get("/api/auth/me")
def me():
    return {"user_id": "user_demo", "name": "Utilisateur ViteAuto", "email": "demo@viteauto.com"}
