import React, { useState } from "react";
import "./header.css";

// ===== IMAGES ===== //
import iconCart from "../../assets/icons/icon_shopping_cart.svg";
import logoYardSales from "../../assets/logos/logo_yard_sale.svg";
import iconBurgerMenu from "../../assets/icons/icon_menu.svg";

// ===== COMPONENTS ===== //
import Profile from "../Profile/Profile";
import CartDetails from "../CartDetails/CartDetails";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import AddProductForm from "../AddProduct/AddProductForm";



export default function Header() {
  const [desktopMenu, setDesktopMenu] = useState(false);
  const [cartDetails, setCartDetails] = useState(false);
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [addProduct, setAddProduct] = useState(false);

  const toggleDesktopMenu = () => {
    setDesktopMenu(!desktopMenu);
  };
  
  const toggleCartDetails = () => {
    setCartDetails(!cartDetails);
  };
  
  const toggleBurgerMenu = () => {
    setBurgerMenu(!burgerMenu);
  };
  
  const toggleAddProduct = () => {
    setAddProduct(!addProduct);
  };

  return (
    <nav>
      {/* BURGER MENU MOBILE */}
      <img onClick={toggleBurgerMenu} id="hamIcon" src={iconBurgerMenu} alt="menu" className="menu" />

      {/* OPEN BURGER MENU */}
      {burgerMenu ? <BurgerMenu /> : ''}


      {/* ADD PRODUCT BUTTON POS ABSOLUTE */}
      <div className="mi-boton">
        <button onClick={toggleAddProduct} id="openProductForm">Add Product</button>
      </div>

      {/* OPEN ADD PRODUCT FORM */}
      {addProduct ? <AddProductForm /> : ''}

      {/* NAVBAR ESCRITORIO */}
      <div className="navbar-left">
        <img src={logoYardSales} alt="logo" className="logo" />

        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
          {/* === OPCIONES DE MI PERFIL === */}
          <li onClick={toggleDesktopMenu} id="navbarEmail" className="navbar-email">
            <p>Joseadu</p>
          </li>

          {/* === ABRIR MENU DE PERFIL con toggleDesktopMenu(); === */}
          {desktopMenu ? <Profile /> : ''}


          {/* === CARRITO DE COMPRAS === */}
          <li onClick={toggleCartDetails} id="navbarShoppingCart" className="navbar-shopping-cart">
            <img src={iconCart} alt="shopping cart" />
            <div>2</div>
          </li>
        </ul>

        {/* === ABRIR CARRITO DE COMPRAS === */}
        {cartDetails ? <CartDetails /> : '' }
      </div>
    </nav>
  );
}
