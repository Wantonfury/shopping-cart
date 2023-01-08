import React from "react";
import IconGithub from "../assets/images/github.png";
import "./css/Footer.css";

const Footer = () => {
    return (
        <div id="footer">
            <p>Made by Wantonfury</p>
            <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={IconGithub} alt="Github Link" />
            </a>
        </div>
    );
}

export default Footer;