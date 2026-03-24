import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";

const API = `${import.meta.env.VITE_API_URL || "http://localhost:8000"}/api`;
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem("viteauto_token"));
  const [loading, setLoading] = useState(true);

  const authHeaders = useMemo(() => (token ? { Authorization: `Bearer ${token}` } : {}), [token]);

  useEffect(() => {
    const run = async () => {
      const savedToken = localStorage.getItem("viteauto_token");
      if (!savedToken) {
        setLoading(false);
        return;
      }
      try {
        const res = await axios.get(`${API}/auth/me`, { headers: { Authorization: `Bearer ${savedToken}` } });
        setUser(res.data);
        setToken(savedToken);
      } catch {
        localStorage.removeItem("viteauto_token");
        setUser(null);
        setToken(null);
      } finally {
        setLoading(false);
      }
    };
    run();
  }, []);

  const login = async (email, password) => {
    const res = await axios.post(`${API}/auth/login`, { email, password });
    localStorage.setItem("viteauto_token", res.data.token);
    setToken(res.data.token);
    setUser(res.data.user);
    return res.data.user;
  };

  const register = async (userData) => {
    const res = await axios.post(`${API}/auth/register`, userData);
    localStorage.setItem("viteauto_token", res.data.token);
    setToken(res.data.token);
    setUser(res.data.user);
    return res.data.user;
  };

  const logout = () => {
    localStorage.removeItem("viteauto_token");
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, isAuthenticated: !!user, login, register, logout, authHeaders }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

export default AuthContext;
