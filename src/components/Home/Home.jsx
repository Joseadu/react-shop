import React from "react";
import './home.css';

// =========== IMAGES
import iconAddToCart from '../../assets/icons/bt_add_to_cart.svg';
import bike from '../../assets/img/bike.jpeg';

export default function Home(props) {
  return (
      <div className="product-card">
        <img
          src={bike}
          alt=""
        />
        <div className="product-info">
          <div>
            <p>{props.price}</p>
            <p>{props.title}</p>
          </div>

          <figure>
            <img src={iconAddToCart} alt="" />
          </figure>
        </div>
      </div>
  );
}
