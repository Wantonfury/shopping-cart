import React, { useContext } from "react";
import "../css/Cart.css";
import CartContext from "../../contexts/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
    const { cartItems, setCartItems } = useContext(CartContext);
    
    const increaseCartItem = (index) => {
        const newCartItems = cartItems.map((item, itemIndex) => {
            if (itemIndex === index) {
                return { ...item, stock: item.stock + 1 };
            }
            return item;
        });
        
        setCartItems(newCartItems);
    }
    
    const decreaseCartItem = (index) => {
        const newCartItems = cartItems.map((item, itemIndex) => {
            if (itemIndex === index) {
                return { ...item, stock: item.stock - 1 };
            }
            return item;
        })
        .filter(item => {
            if (item.stock <= 0) return false;
            return true;
        });
        
        setCartItems(newCartItems);
    }
    
    return (
        <div id="cart-page">
            <ul id="cart-container" className="main-wrapper">
                {cartItems.map((item, index) => {
                    return <li key={index}>
                        <CartItem img={item.img} title={item.title} price={item.price} stock={item.stock}
                        increaseCartItem={increaseCartItem} decreaseCartItem={decreaseCartItem} index={index} />
                    </li>
                })}
            </ul>
            
            <button type="button" id="checkout">Checkout</button>
        </div>
    );
}

export default Cart;