import React, {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../../context/AuthContext";
import "./Header.css"
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import PrimaryButton from "../Button/PrimaryButton";
import {ReactComponent as Logo} from "../../Assets/HeaderLogo.svg";


export default function HeaderMenu() {

    const [activeItem, setActiveItem] = useState('dashboard');
    const [modalVisible, setModalVisible] = useState(false);
    const {user, logout} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();


    useEffect(() => {
        const path = location.pathname;
        if (path.includes('AdminDashboard')) {
            setActiveItem('adminDashboard');
        } else if (path.includes('Dashboard')) {
            setActiveItem('dashboard');
        } else if (path.includes('About')) {
            setActiveItem('about');
        } else if (path.includes('Contact')) {
            setActiveItem('contact');
        } else if (path.includes('Blog')) {
            setActiveItem('blog');
        }
    }, [location.pathname, user]);

    const handleItemClick = (item: string) => {
        setActiveItem(item);
    }
    const handleLogout = async () => {
        try {
            await logout();
            navigate("/admin-login", {replace: true});
        } catch (error) {
            console.error(error);
        }
    };
    const toggleModal = () => {
        setModalVisible(!modalVisible);
    }
    return (
        <>
            <div className="Header-desktop">
                <DesktopHeader activeItem={activeItem} role={user?.role} itemClicked={handleItemClick}
                               handleLogoutClick={handleLogout}/>
            </div>
            <div className="Header-mobile">
                <div className="Header-wrapper-mobile">
                    <div className="Header-Logo-Label">
                        <Logo/>
                        <label>Nutrimental Diet</label>
                    </div>
                    <PrimaryButton icon={"bars"} onClick={toggleModal} type={"button"} iconSize={"fa-sm"}/>
                    {modalVisible &&
                        <MobileHeader activeItem={activeItem} role={user?.role} itemClicked={handleItemClick}
                                      handleLogoutClick={handleLogout}/>
                    }
                </div>
            </div>
        </>
    )

}