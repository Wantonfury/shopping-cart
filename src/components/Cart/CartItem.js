import React from "react";

const CartItem = props => {
    return (
        <div className="shop-item cart-item">
            <img src={props.img} />
            <p>{props.title}</p>
            <p>{props.price.toFixed(2)}</p>
        </div>
    );
}

export default CartItem;