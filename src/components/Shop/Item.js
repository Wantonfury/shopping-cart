import React from "react";

const Item = props => {
    return (
        <div className="shop-item">
            <img src={props.img} />
            <p>{props.title}</p>
            <p>{props.price.toFixed(2)}</p>
            <button type="button" onClick={props.onClick}>Add to cart</button>
        </div>
    );
}

export default Item;