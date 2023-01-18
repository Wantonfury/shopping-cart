import React, { useContext } from "react";
import ShopItem from "./ShopItem";
import "../css/Shop.css";
import BearSpringCollar from "../../assets/images/bear-spring-collar.webp";
import DauletApparelRedButterfly from "../../assets/images/daulet-apparel-red-butterfly.webp";
import PlainTShirtRed from "../../assets/images/plain-tshirt-red.webp";
import BlackRoseSweatshirt from "../../assets/images/black-rose-unisex-organic-sweatshirt.webp";
import PickleHoodie from "../../assets/images/pickle-hoodie.webp";
import CartContext from "../../contexts/CartContext";

const Shop = () => {
    const { cartItems, setCartItems } = useContext(CartContext);
    
    const addToCart = (img, title, price) => {
        let cartItem = {
            img: img,
            title: title,
            price: price,
            stock: 1
        };
        
        const oldItem = cartItems.find((item) => {
            if (item.img === cartItem.img && item.title === cartItem.title && item.price === cartItem.price) return true;
            return false;
        });
        
        if (oldItem) {
            const newCartItems = cartItems.map(item => {
                if (item === oldItem) {
                    return { ...item, stock: item.stock + 1 };
                }
                return item;
            });
            
            setCartItems(newCartItems);
        } else {
            setCartItems([...cartItems, cartItem]);
        }
    }
    
    return (
        <div id="shop" className="main-wrapper">
            <ShopItem onClick={addToCart} img={BearSpringCollar} 
                title={"Cute Bear Spring Collar Korean Style House Clothes Yellow"} price={45.99} />
            <ShopItem onClick={addToCart} img={DauletApparelRedButterfly}
                title={"Daulet Apparel Red Butterfly Unisex Men Women Streetwear"} price={29.99} />
            <ShopItem onClick={addToCart} img={PlainTShirtRed} title={"Plain T-Shirt Red"} price={3.99} />
            <ShopItem onClick={addToCart} img={BlackRoseSweatshirt} 
                title={"Black rose unisex organic sweatshirt"} price={89.99} />
            <ShopItem onClick={addToCart} img={PickleHoodie} title={"Pickle Hoodie"} price={29.99} />
        </div>
    );
}

export default Shop;