import {NavLink} from "react-router-dom";
import PrimaryButton from "../Button/PrimaryButton";

interface DesktopHeaderProps {
    activeItem: string;
    role?: string;
    itemClicked: (item: string) => void;
    handleLogoutClick: () => void;
}

export default function MobileHeader({activeItem, itemClicked, role, handleLogoutClick}: DesktopHeaderProps) {
    return (
        <>
            <div>
                <ul className="Header-list-mobile">
                    <li
                        className={`sidebar-item ${activeItem === 'dashboard' || activeItem === 'adminDashboard' ? 'active' : ''}`}
                        onClick={() => itemClicked(role === 'admin' ? 'adminDashboard' : 'dashboard')}>
                        <NavLink to={role === 'admin' ? "/AdminDashboard" : "/Dashboard"}
                                 style={({isActive}) => ({
                                     color: isActive ? '#4d4277' : '#478048',
                                     fontWeight: isActive ? 600 : 400,
                                     textDecoration: "none"
                                 })}>
                            Dashboard
                        </NavLink>
                    </li>
                    <li className={`sidebar-item ${activeItem === 'about' ? 'active' : ''}`}
                        onClick={() => itemClicked('about')}>
                        <NavLink to="/About" style={({isActive}) => ({
                            color: isActive ? '#4d4277' : '#478048',
                            fontWeight: isActive ? 600 : 400,
                            textDecoration: "none"
                        })}>
                            About us
                        </NavLink>
                    </li>
                    <li className={`sidebar-item ${activeItem === 'contact' ? 'active' : ''}`}
                        onClick={() => itemClicked('contact')}>
                        <NavLink to="/Contact" style={({isActive}) => ({
                            color: isActive ? '#4d4277' : '#478048',
                            fontWeight: isActive ? 600 : 400,
                            textDecoration: "none"
                        })}>
                            Contact
                        </NavLink>
                    </li>
                    <li className={`sidebar-item ${activeItem === 'blog' ? 'active' : ''}`}
                        onClick={() => itemClicked('blog')}>
                        <NavLink to="/Blog" style={({isActive}) => ({
                            color: isActive ? '#4d4277' : '#478048',
                            fontWeight: isActive ? 600 : 400,
                            textDecoration: "none"
                        })}>
                            Blog
                        </NavLink>
                    </li>
                    {role === 'admin' &&
                        <PrimaryButton icon={"sign-out"} iconSize={"fa-sm"} type={"button"}
                                       onClick={handleLogoutClick}
                                       text="Logout"/>}
                </ul>
            </div>
        </>
    )

}