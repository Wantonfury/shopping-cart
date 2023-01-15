import React from "react";

const ShopItem = props => {
    const onClick = () => {
        props.onClick(props.img, props.title, props.price);
    }
    
    return (
        <div className="shop-item">
            <img src={props.img} />
            <p>{props.title}</p>
            <p>{props.price.toFixed(2)}</p>
            <button type="button" onClick={onClick}>Add to cart</button>
        </div>
    );
}

export default ShopItem;