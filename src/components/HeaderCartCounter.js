import React, { useContext } from "react";
import CartContext from "../contexts/CartContext";

const HeaderCartCounter = props => {
    const { cartItems } = useContext(CartContext);
    
    const render = () => {
        if (cartItems.length === 0) return null;
        else return (
            <div id="cart-counter">{cartItems.length}</div>
        );
    }
    
    return (
        render()
    );
}

export default HeaderCartCounter;