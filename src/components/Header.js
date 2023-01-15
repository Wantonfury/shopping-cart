import React from "react";
import { Link } from "react-router-dom";
import IconCart from "../assets/images/cart.svg";
import HeaderCartCounter from "./HeaderCartCounter";
import "./css/Header.css";

const Header = () => {
    return (
        <nav id="header">
            <div className="header-wrapper">
                <h4>Welcome to Name!</h4>
                <ul className="nav-links">
                    <li><Link to="home">Home</Link></li>
                    <li><Link to="shop">Shop</Link></li>
                    <li><Link to="cart">
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "48px",
                            height: "48px",
                            backgroundColor: "white",
                            borderRadius: "50%",
                            position: "relative"
                        }}>
                            <img src={IconCart} style={{
                                height: "32px"
                            }} />
                            
                            <HeaderCartCounter />
                        </div>
                    </Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;