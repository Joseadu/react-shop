import React from 'react';
import './add-product-form.css';

export default function AddProductForm() {
  return (
    <div id="formAddProduct" className="form-container inactive">
        <h2>Add product</h2>

        <form id="myForm" className="my-form">
            <input id="titleProduct" type="text" placeholder="Insert title" /><br />
            <input id="priceProduct" type="tex" placeholder="Insert price" /><br />
            <button id="formBtn" type="submit">Submit</button>
        </form>
    </div>
  )
}
