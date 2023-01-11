import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home/Home";
import "./css/Main.css";
import Shop from "./Shop/Shop";
import Cart from "./Cart/Cart";

const Main = () => {
    return (
        <div id="main">
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </div>
    );
}

export default Main;