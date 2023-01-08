import React from "react";
import { Link } from "react-router-dom";
import "./css/Header.css";

const Header = () => {
    return (
        <nav id="header">
            <h4>Welcome to Name!</h4>
            <ul className="nav-links">
                <li><Link to="home">Home</Link></li>
                <li><Link to="shop">Shop</Link></li>
            </ul>
        </nav>
    );
}

export default Header;