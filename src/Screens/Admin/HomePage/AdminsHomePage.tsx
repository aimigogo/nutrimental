import React from "react";
import {useAuth} from "../../../context/AuthContext";
import {Loader} from "../../../Components/Loader/Loader";
import HeaderMenu from "../../../Components/Header/HeaderMenu";
import Footer from "../../../Components/Footer/Footer";

export default function AdminsHomePage() {
    const {user, loading} = useAuth();

    return (
        <div>
            <HeaderMenu/>
            <div style={styles.wrapper}>
                <div style={styles.card}>
                    {loading ? (
                        <Loader/>
                    ) : (
                        <>
                            <h1 style={styles.title}>👤 Admin Dashboard</h1>
                            <p style={styles.sub}>Welcome, <strong>{user?.email}</strong></p>
                            <p style={styles.badge}>Role: {user?.role}</p>
                        </>
                    )}
                </div>
            </div>
            <Footer/>
        </div>

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
};