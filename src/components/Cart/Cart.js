import React, { useContext } from "react";
import "../css/Cart.css";
import CartContext from "../../contexts/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
    const { cartItems } = useContext(CartContext);
    
    return (
        <div id="cart-page">
            <ul id="cart-container" className="main-wrapper">
                {cartItems.map((item, index) => {
                    return <li key={index}>
                        <CartItem img={item.img} title={item.title} price={item.price} />
                    </li>
                })}
            </ul>
            
            <button type="button" id="checkout">Checkout</button>
        </div>
    );
}

export default Cart;