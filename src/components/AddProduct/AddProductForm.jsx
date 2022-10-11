import React, { useState } from "react";
import "./add-product-form.css";

export default function AddProductForm() {
  const [getProductTitle, setGetProductTitle] = useState('');
  const [getProductPrice, setGetProductPrice] = useState('');

  const onGetProductTitle = (event) => {
    setGetProductTitle(event.target.value);
    console.log(event.target.value);
  }
  const onGetProductPrice = (event) => {
    setGetProductPrice(event.target.value);
    console.log(event.target.value);
  }

  return (
    <div id="formAddProduct" className="form-container inactive">
      <h2>Add product</h2>

      <form id="myForm" className="my-form">
        <input value={getProductTitle} onChange={onGetProductTitle} id="titleProduct" type="text" placeholder="Insert title" />
        <br />
        <input value={getProductPrice} onChange={onGetProductPrice} id="priceProduct" type="tex" placeholder="Insert price" />
        <br />
        <button id="formBtn" type="button">
          Add
        </button>
      </form>
    </div>
  );
}
