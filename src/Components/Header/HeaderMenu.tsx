import React, {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../../context/AuthContext";
import "./Header.css"
import DesktopHeader from "./DesktopHeader";
import MobileMenu from "./MobileMenu";
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
    const LogoClicked = (role: string | undefined) => {
        navigate(role === 'admin' ? '/adminDashboard' : '/dashboard')
        handleItemClick(role === 'admin' ? '/adminDashboard' : '/dashboard')
    }
    return (
        <>
            <div className="Header-desktop">
                <DesktopHeader activeItem={activeItem} role={user?.role} itemClicked={handleItemClick}
                               handleLogoutClick={handleLogout} LogoClicked={LogoClicked}/>
            </div>
            <div className="Header-mobile">
                <div className="Header-wrapper-mobile">
                    <div className="Header-Logo-Label" onClick={() => LogoClicked(user?.role)}>
                        <Logo/>
                        <label>Nutrimental Diet</label>
                    </div>
                    <div>
                        <button  className={"Burger-button"} type={"button"} onClick={toggleModal}>
                            <i className={`fa fa-bars fa-sm`}></i>
                        </button>
                        {modalVisible && (
                            <>
                                <div
                                    className="Modal-backdrop"
                                    onClick={toggleModal}
                                />
                                <MobileMenu
                                    activeItem={activeItem}
                                    role={user?.role}
                                    itemClicked={handleItemClick}
                                    handleLogoutClick={handleLogout}
                                    toggleModal={toggleModal}
                                />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )

}