import React from "react";
import './cart-products.scss';

// IMAGES
import iconClose from "../../assets/icons/icon_close.png";

export default function CartProducts({ product }) {
  return (
    <>
      <div className="shopping-cart">
        <figure>
          <img src={product.images[0]} alt="bike" />
        </figure>
        <p>{product.title}</p>
        <p>${product.price}</p>
        <img src={iconClose} alt="close" />
      </div>
    </>
  );
}
