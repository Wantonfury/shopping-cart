import React from "react";
import { Link } from "react-router-dom";
import "./css/Header.css";

const Header = () => {
    return (
        <nav id="header">
            <div className="header-wrapper">
                <h4>Welcome to Name!</h4>
                <ul className="nav-links">
                    <li><Link to="home">Home</Link></li>
                    <li><Link to="shop">Shop</Link></li>
                    <li><Link to="cart">Cart</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;