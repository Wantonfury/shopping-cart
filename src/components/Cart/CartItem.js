import React from "react";
import IconPlus from "../../assets/images/plus.svg";
import IconMinus from "../../assets/images/minus.svg";

const CartItem = props => {
    const increaseCartItem = () => {
        props.increaseCartItem(props.index);
    }
    
    const decreaseCartItem = () => {
        props.decreaseCartItem(props.index);
    }
    
    return (
        <div className="shop-item cart-item">
            <img src={props.img} />
            <p>{props.title}</p>
            <p>{props.price.toFixed(2)}</p>
            <div className="cart-item-count">
                <input className="cart-add" type="image" src={IconPlus} onClick={increaseCartItem} />
                <div>{props.stock}</div>
                <input className="cart-remove" type="image" src={IconMinus} onClick={decreaseCartItem} />
            </div>
        </div>
    );
}

export default CartItem;