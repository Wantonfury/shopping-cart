import React, { useContext } from "react";
import ShopItem from "./ShopItem";
import "../css/Shop.css";
import BearSpringCollar from "../../assets/images/bear-spring-collar.webp";
import CartContext from "../../contexts/CartContext";

const Shop = () => {
    const { cartItems, setCartItems } = useContext(CartContext);
    
    const addToCart = (img, title, price) => {
        let item = {
            img: img,
            title: title,
            price: price
        };
        
        setCartItems([...cartItems, item]);
    }
    
    return (
        <div id="shop" className="main-wrapper">
            <ShopItem onClick={addToCart} img={BearSpringCollar} title={"Title"} price={0.0} />
            <ShopItem onClick={addToCart} img={BearSpringCollar} title={"Title"} price={0.0} />
            <ShopItem onClick={addToCart} img={BearSpringCollar} title={"Title"} price={0.0} />
            <ShopItem onClick={addToCart} img={BearSpringCollar} title={"Title"} price={0.0} />
            <ShopItem onClick={addToCart} img={BearSpringCollar} title={"Title"} price={0.0} />
        </div>
    );
}

export default Shop;