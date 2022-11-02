import React, { useState, useContext, useEffect, useRef } from "react";
import "./product-card.css";
import ProductDetails from "../ProductDetails/ProductDetails";

// =========== IMAGES
import iconAddToCart from "../../assets/icons/bt_add_to_cart.svg";
import AppContext from "../../Context/AppContext";

// RETORNO DEL COMPONENTE
export default function ProductCard({ product }) {
  // USESTATE - COMPROBANDO SI EL ESTADO DE PRODUCT DETAILS ES TRUE O FALSE
  const [productDetails, setProductDetails] = useState(false);


  // Función que hará de 'TOGGLE' para que aparezca y desaparezca el componente ProductDetails
  const toggleProductDetails = () => {
    setProductDetails(true);
  };

  // AÑADIR AL CARRITO
  const { addToCart } = useContext(AppContext);

  const addProductToCart = (item) => {
    addToCart(item);
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

  // ========= RETORNO DEL COMPONENTE
  return (
    <div className="product-card">
      <img
        onClick={toggleProductDetails}
        src={product.images[0]}
        alt={product.title}
      />

      {/* OPEN PRODUCT DETAILS */}
      <div ref={productDetailsRef}>
        {productDetails ? (
          <ProductDetails
            setProductDetails={setProductDetails}
            title={product.title}
            price={product.price}
            image={product.images[0]}
          />
        ) : (
          ""
        )}
      </div>

      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>

        <figure>
          <img
            onClick={() => addProductToCart(product)}
            src={iconAddToCart}
            alt=""
          />
        </figure>
      </div>
    </div>
  );
}