import React from "react";
import './cart-details.css';

// COMPONENTS
import CartProducts from "../CartProducts/CartProducts";

// ========== IMAGES
import iconArrowLeft from '../../assets/icons/flechita.svg';

export default function CartDetails() {
  return (
    <aside id="productDetail" className="product-detail">
      <div className="title-container">
        <img src={iconArrowLeft} alt="arrow" />
        <p className="title">My order</p>
      </div>

      <div className="my-order-content">
        <CartProducts />
      </div>

      <div className="order">
        <p>
          <span>Total</span>
        </p>
        <p>$1500.00</p>
      </div>

      <button className="primary-button">Checkout</button>
      
    </aside>
  );
}