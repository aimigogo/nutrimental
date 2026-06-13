import {NavLink} from "react-router-dom";
import {ReactComponent as Logo} from "../../Assets/HeaderLogo.svg";
import MapComponent from "../Map/MapComponent";


interface FooterProps {
    role?: string;
    LogoClicked: (role: string | undefined) => void;
}

export function FooterDesktop({
                                  role,
                                  LogoClicked
                              }: FooterProps) {
    const socials = [
        {icon: "instagram", url: "https://instagram.com/yourpage"},
    ];
    return (
        <>
            <div className="Footer-wrapper">
                <div className="Footer-logo" onClick={() => LogoClicked(role)}>
                    <Logo/>
                    <label className="Logo-Label">Nutrimental Diet</label>
                </div>
                <div className="Footer-body__categories-labels">
                    <div className="Footer-body-category">
                        <label className="Category-label">Where to find us</label>
                        <div style={{position: 'absolute', top: '16px'}}>
                            <MapComponent/>
                        </div>
                    </div>
                    <div className="Footer-body-category">
                        <label className="Category-label">Quick Access</label>
                        <ul className="Footer-list">
                            <li>
                                <NavLink to={role === 'admin' ? "/AdminDashboard" : "/Dashboard"}
                                         style={{
                                             color: '#478048',
                                             fontWeight: 400,
                                             textDecoration: "none"
                                         }}>
                                    Dashboard
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/About" style={{
                                    color: '#478048',
                                    fontWeight: 400,
                                    textDecoration: "none"
                                }}>
                                    About us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/Contact" style={{
                                    color: '#478048',
                                    fontWeight: 400,
                                    textDecoration: "none"
                                }}>
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/Blog" style={{
                                    color: '#478048',
                                    fontWeight: 400,
                                    textDecoration: "none"
                                }}>
                                    Blog
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="Footer-body-category">
                        <label className="Category-label">Find us in Social</label>
                        <div className="Social-icons">
                            {socials.map((s) => (
                                <a key={s.icon} href={s.url} target="_blank" rel="noopener noreferrer">
                                    <i className={`fa-brands fa-${s.icon}`}></i>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}