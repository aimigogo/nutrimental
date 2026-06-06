import {useAuth} from "../context/AuthContext";
import {useNavigate} from "react-router-dom";
import {Loader} from "../Components/Loader/Loader";
import HeaderMenu from "../Components/Header/HeaderMenu";
import Footer from "../Components/Footer/Footer";

export default function HomePage() {
    const {user, logout} = useAuth();
    const navigate = useNavigate();

    return (
        <>
            <HeaderMenu/>
            <div style={styles.wrapper}>
                <div style={styles.card}>
                    <Loader/>
                    <p style={styles.sub}>Welcome, <strong>{user?.email}</strong></p>
                    <p style={styles.badge}>Role: {user?.role}</p>
                </div>
            </div>
            <Footer/>
        </>

    );
}

const styles: Record<string, React.CSSProperties> = {
    wrapper: {
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f5f5f5"
    },
    card: {
        background: "#fff",
        padding: "2rem",
        borderRadius: "12px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        textAlign: "center"
    },
    title: {fontSize: "1.75rem", marginBottom: "1rem"},
    sub: {color: "#374151", marginBottom: "0.5rem"},
    badge: {
        display: "inline-block",
        background: "#e0f2f1",
        color: "#01696f",
        padding: "0.25rem 0.75rem",
        borderRadius: "999px",
        marginBottom: "1.5rem"
    },
    button: {
        padding: "0.625rem 1.5rem",
        background: "#dc2626",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: 600
    },
};