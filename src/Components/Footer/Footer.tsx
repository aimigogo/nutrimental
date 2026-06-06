import React from "react";
import {ReactComponent as Logo} from "../../Assets/HeaderLogo.svg";
import "./Footer.css"


export default function Footer() {
    return (
        <div className="Footer-wrapper">
            <div className="Footer-logo">
                <Logo/>
                <label className="Logo-Label">Nutrimental Diet</label>
            </div>
        </div>
    );
}