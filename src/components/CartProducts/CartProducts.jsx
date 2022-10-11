import React from "react";
import './cart-products.css'

// IMAGES
import bike from "../../assets/img/bike.jpeg";
import iconClose from "../../assets/icons/icon_close.png";

export default function CartProducts() {
  return (
    <>
      <div className="shopping-cart">
        <figure>
          <img src={bike} alt="bike" />
        </figure>
        <p>Bike</p>
        <p>$500,00</p>
        <img src={iconClose} alt="close" />
      </div>

      <div className="shopping-cart">
        <figure>
          <img src={bike} alt="bike" />
        </figure>
        <p>Bike</p>
        <p>$500,00</p>
        <img src={iconClose} alt="close" />
      </div>

      <div className="shopping-cart">
        <figure>
          <img src={bike} alt="bike" />
        </figure>
        <p>Bike</p>
        <p>$500,00</p>
        <img src={iconClose} alt="close" />
      </div>
    </>
  );
}
