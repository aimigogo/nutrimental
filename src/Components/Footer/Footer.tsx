import React from "react";
import "./Footer.css"
import {useAuth} from "../../context/AuthContext";
import {useNavigate} from "react-router-dom";
import {FooterDesktop} from "./FooterDesktop";


export default function Footer() {
    const {user} = useAuth();
    const navigate = useNavigate();

    const LogoClicked = (role: string | undefined) => {
        navigate(role === 'admin' ? '/adminDashboard' : '/dashboard')
    }
    return (
        <>
            <div className='Footer-desktop'>
                <FooterDesktop role={user?.role} LogoClicked={LogoClicked}/>
            </div>
            <div className='Footer-mobile'>

            </div>
        </>
    );
}