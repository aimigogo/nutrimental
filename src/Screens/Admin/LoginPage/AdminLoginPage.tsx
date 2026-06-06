import React, {useEffect, useState} from "react";
import {ReactComponent as Logo} from "../../../Assets/Logo.svg";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../../context/AuthContext";
import PrimaryButton from "../../../Components/Button/PrimaryButton";
import "./LoginPage.css";


export default function AdminLoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const {login, user} = useAuth();
    const [error, setError] = useState("");

    useEffect(() => {
        if (user?.role === "admin") {
            navigate("/admin", {replace: true});
        }
    }, [user?.role]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        try {
            await login(email, password);
        } catch (error) {
            setError("Wrong email or password");
        }
    };

    return (
        <div className={"Admin-LoginPage-wrapper"}>
            <div className="Admin-LoginPage-wrapper__card">
                <div className="Admin-LoginPage-wrapper__card--title">
                    <label>Welcome to Nutrimental Diet</label>
                </div>
                <div className="login-header">
                    <Logo className="login-logo"/>
                </div>
                <div>
                    <label className="Admin-LoginPage-wrapper__card--title">Please enter your credentials to
                        Login</label>
                </div>
                <form onSubmit={handleLogin}>
                    <div className="Admin-LoginPage-wrapper__card--form">
                        <div className="Admin-LoginPage-wrapper__card--form-items">
                            <label htmlFor="email" className="Admin-LoginPage-wrapper__card--subtitle">Email</label>
                            <input
                                type="text"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="Admin-LoginPage-wrapper__card--input"
                            />
                        </div>
                        <div className="Admin-LoginPage-wrapper__card--form-items">
                            <label htmlFor="password"
                                   className="Admin-LoginPage-wrapper__card--subtitle">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="Admin-LoginPage-wrapper__card--input"
                            />
                        </div>
                        <PrimaryButton type={"submit"} icon={"sign-in"} text={"Login"}
                                       onClick={() => navigate("/adminDashboard", {replace: true})}/>
                    </div>

                </form>
                {error && <p style={{color: "red"}}>{error}</p>}
            </div>
        </div>
    );
}