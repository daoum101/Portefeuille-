import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import ListingDetailPage from "./pages/ListingDetailPage";
import CreateListingPage from "./pages/CreateListingPage";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();
  if (loading) return <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center">Chargement...</div>;
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return children;
}

function PublicOnlyRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();
  if (loading) return <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center">Chargement...</div>;
  if (isAuthenticated) return <Navigate to="/dashboard" replace />;
  return children;
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/listing/:id" element={<ListingDetailPage />} />
        <Route path="/create-listing" element={<ProtectedRoute><CreateListingPage /></ProtectedRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
        <Route path="/login" element={<PublicOnlyRoute><LoginPage /></PublicOnlyRoute>} />
        <Route path="/register" element={<PublicOnlyRoute><RegisterPage /></PublicOnlyRoute>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
