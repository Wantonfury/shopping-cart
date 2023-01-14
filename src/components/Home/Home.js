import React from "react";
import { Link } from "react-router-dom";
import HomeImage from "../../assets/images/home.webp";
import "../css/Home.css";

const Home = () => {
    return (
        <div id="home">
            <div className="homepage-description">
                <h1>Best store online!</h1>
                <p>We sell what we must, because we can.</p>
                <Link to="/shop" className="homepage-button-wrapper">
                    <button type="button" className="homepage-button">Shop now</button>
                </Link>
            </div>
            <img src={HomeImage} className="homepage-img" />
        </div>
    );
}

export default Home;