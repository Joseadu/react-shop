import React, { useState, useEffect, useRef } from "react";
import useGetProducts from "../../Hooks/useGetProducts";
import Header from "../../components/Header/Header";
import ProductCard from "../../components/ProductCard/ProductCard";
// import AddProductForm from "../../components/AddProduct/AddProductForm";

// const products = [
//   {
//     id: 1,
//     title: 'bike',
//     price: '$500'
//   },
//   {
//     id: 2,
//     title: 'PC',
//     price: '$1200'
//   },
//   {
//     id: 3,
//     title: 'Laptop',
//     price: '$1000'
//   },
//   {
//     id: 4,
//     title: 'Phone',
//     price: '$800'
//   },
//   {
//     id: 5,
//     title: 'Sneakers',
//     price: '$80'
//   },
//   {
//     id: 6,
//     title: 'T-shirt',
//     price: '$20'
//   },
//   {
//     id: 7,
//     title: 'Shelf',
//     price: '$120'
//   },
//   {
//     id: 8,
//     title: 'Boob',
//     price: '$15'
//   }
// ]

const API = "https://api.escuelajs.co/api/v1/products?limit=20&offset=0";

export default function Home() {
  const [addProduct, setAddProduct] = useState(false);

  const products = useGetProducts(API)

  const toggleAddProduct = () => {
    setAddProduct(!addProduct);
  };

  // USEREF - Para cerrar el componente ProductDetails cuando haces click fuera
  let AddProductFormRef = useRef();

  useEffect(() => {
    let handlerAddProductForm = (event) => {
      if (!AddProductFormRef.current.contains(event.target)) {
        setAddProduct(false);
      }
    };
    document.addEventListener("mousedown", handlerAddProductForm);
    return () => {
      document.removeEventListener("mousedown", handlerAddProductForm);
    };
  });

  return (
    <>
      <Header />

      {/* CONTAINER FOR PRODUCTS */}
      <div id="cardsContainer" className="cards-container">
        {products?.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

      {/* ADD PRODUCT BUTTON POS ABSOLUTE */}
      <div className="mi-boton">
        <button onClick={toggleAddProduct} id="openProductForm">
          Add Product
        </button>
      </div>

      {/* OPEN ADD PRODUCT FORM */}
      {/* <div ref={AddProductFormRef}>{addProduct ? <AddProductForm /> : ""}</div> */}
    </>
  );
}
