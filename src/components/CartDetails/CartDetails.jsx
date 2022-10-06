import React from "react";
import './cart-details.css';

// ========== IMAGES
import iconClose from '../../assets/icons/icon_close.png';
import iconArrowLeft from '../../assets/icons/flechita.svg';
import bike from '../../assets/img/bike.jpeg';

export default function CartDetails() {
  return (
    <aside id="productDetail" className="product-detail">
      <div className="title-container">
        <img src={iconArrowLeft} alt="arrow" />
        <p className="title">My order</p>
      </div>

      <div className="my-order-content">
        <div className="shopping-cart">
          <figure>
            <img
              src={bike}
              alt="bike"
            />
          </figure>
          <p>Bike</p>
          <p>$30,00</p>
          <img src={iconClose} alt="close" />
        </div>

        <div className="shopping-cart">
          <figure>
            <img
              src={bike}
              alt="bike"
            />
          </figure>
          <p>Bike</p>
          <p>$30,00</p>
          <img src={iconClose} alt="close" />
        </div>

        <div className="shopping-cart">
          <figure>
            <img
              src={bike}
              alt="bike"
            />
          </figure>
          <p>Bike</p>
          <p>$30,00</p>
          <img src={iconClose} alt="close" />
        </div>

        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>$560.00</p>
        </div>

        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
}
