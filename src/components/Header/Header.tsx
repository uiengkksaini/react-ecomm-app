import { NavLink } from "react-router-dom";
import './style.css'
const Header = () => {
    return (
        <div className="header">
            <div className="menu-container">
                <div className="logo">EcommApp</div>
                <ul className="menus">
                    <li className="menu-item">
                        <NavLink to={''}>Home</NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink to={'cart'}>Cart</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
