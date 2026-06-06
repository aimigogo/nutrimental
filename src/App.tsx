import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "../src/Components/ProtectedRoute";
import AdminLoginPage from "./Screens/Admin/LoginPage/AdminLoginPage";
import HomePage from "../src/Screens/HomePage";
import AdminsHomePage from "./Screens/Admin/HomePage/AdminsHomePage";
import BlogPage from "./Screens/BlogPage";
import AboutPage from "./Screens/AboutPage";
import ContactPage from "./Screens/ContactPage";

export default function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    {/* Public */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/dashboard" element={<HomePage />} />
                    <Route path="/admin-login" element={<AdminLoginPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/blog" element={<BlogPage />} />

                    {/* mysite.gr/admin — admins only */}
                    <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
                        <Route path="/adminDashboard" element={<AdminsHomePage />} />
                    </Route>

                    {/* Fallback */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}