import React from "react";
import Item from "./Item";
import "../css/Shop.css";
import BearSpringCollar from "../../assets/images/bear-spring-collar.webp";

const Shop = () => {
    const addToCart = () => {
        
    }
    
    return (
        <div id="shop" className="main-wrapper">
            <Item onClick={addToCart} img={BearSpringCollar} title={"Title"} price={0.0} />
            <Item onClick={addToCart} img={BearSpringCollar} title={"Title"} price={0.0} />
            <Item onClick={addToCart} img={BearSpringCollar} title={"Title"} price={0.0} />
            <Item onClick={addToCart} img={BearSpringCollar} title={"Title"} price={0.0} />
            <Item onClick={addToCart} img={BearSpringCollar} title={"Title"} price={0.0} />
        </div>
    );
}

export default Shop;