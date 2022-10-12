import React, { useContext } from "react";
import './cart-details.css';

// COMPONENTS
import CartProducts from "../CartProducts/CartProducts";

// HOOKS / CONTEXT
import AppContext from "../../Context/AppContext";

// ========== IMAGES
import iconArrowLeft from '../../assets/icons/flechita.svg';

export default function CartDetails() {
  const { state } = useContext(AppContext)

  return (
    <aside id="productDetail" className="product-detail">
      <div className="title-container">
        <img src={iconArrowLeft} alt="arrow" />
        <p className="title">My order</p>
      </div>

      <div className="my-order-content">
        {state.cart.map(product => (
          <CartProducts key={`cartProduct-${product.id}`} product={product} />
        ))}
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