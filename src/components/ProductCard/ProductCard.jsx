import React, { useState, useEffect, useRef } from "react";
import './product-card.css';
import ProductDetails from "../ProductDetails/ProductDetails";

// =========== IMAGES
import iconAddToCart from '../../assets/icons/bt_add_to_cart.svg';

export default function ProductCard(props) {
  // USESTATE - COMPROBANDO SI EL ESTADO DE PRODUCT DETAILS ES TRUE O FALSE
  const [productDetails, setProductDetails] = useState(false);

  // Función que hará de 'TOGGLE' para que aparezca y desaparezca el componente ProductDetails
  const toggleProductDetails = () => {
    setProductDetails(true);
  };


  // USEREF - Para cerrar el componente ProductDetails cuando haces click fuera
  let productDetailsRef = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (!productDetailsRef.current.contains(event.target)) {
        setProductDetails(false)
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    }
  })

  const addProductCard = () => {
    console.log('first')
  }

  // ========= RETORNO DEL COMPONENTE
  return (
      <div className="product-card">
        <img onClick={toggleProductDetails}
          src={props.image}
          alt=""
        />

        {/* OPEN PRODUCT DETAILS */}
        <div ref={productDetailsRef}>
          {productDetails ? <ProductDetails
                            setProductDetails={setProductDetails}
                            title={props.title}
                            price={props.price}
                            image={props.image}
          /> : ''}
        </div>

        <div className="product-info">
          <div>
            <p>${props.price}</p>
            <p>{props.title}</p>
          </div>

          <figure>
            <img onClick={addProductCard} src={iconAddToCart} alt="" />
          </figure>
        </div>
      </div>
  );
}
