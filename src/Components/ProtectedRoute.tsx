import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {Loader} from "./Loader/Loader";

interface ProtectedRouteProps {
    allowedRoles: Array<"admin" | "user">;
}

export default function ProtectedRoute({ allowedRoles }: ProtectedRouteProps) {
    const { user, loading } = useAuth();

    if (loading) {
        return (
            <div style={{ display: "flex", justifyContent: "center",alignItems:"center", marginTop: "4rem" , minHeight: "100vh"}}>
                <Loader/>
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/admin-login" replace />;
    }

    if (!allowedRoles.includes(user.role)) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
}