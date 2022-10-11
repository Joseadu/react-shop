import React, { useState, useEffect, useRef } from "react";
import "./header.css";

// ===== IMAGES ===== //
import iconCart from "../../assets/icons/icon_shopping_cart.svg";
import logoYardSales from "../../assets/logos/logo_yard_sale.svg";
import iconBurgerMenu from "../../assets/icons/icon_menu.svg";

// ===== COMPONENTS ===== //
import Profile from "../Profile/Profile";
import CartDetails from "../CartDetails/CartDetails";
import BurgerMenu from "../BurgerMenu/BurgerMenu";



export default function Header() {
  const [desktopMenu, setDesktopMenu] = useState(false);
  const [cartDetails, setCartDetails] = useState(false);
  const [burgerMenu, setBurgerMenu] = useState(false);
  

  const toggleDesktopMenu = () => {
    setDesktopMenu(!desktopMenu);
  };
  
  const toggleCartDetails = () => {
    setCartDetails(!cartDetails);
  };
  
  const toggleBurgerMenu = () => {
    setBurgerMenu(!burgerMenu);
  };



  // USEREF - Para cerrar el componente ProductDetails cuando haces click fuera
  let desktopMenuRef = useRef();

  useEffect(() => {
    let handlerDesktopMenu = (event) => {
      if (!desktopMenuRef.current.contains(event.target)) {
        setDesktopMenu(false)
      }
    };
    document.addEventListener("mousedown", handlerDesktopMenu);
    return () => {
      document.removeEventListener("mousedown", handlerDesktopMenu);
    }
  })
  
  
  
  // USEREF - Para cerrar el componente CartDetails cuando haces click fuera
  let cartDetailsRef = useRef();

  useEffect(() => {
    let handlerCardDetails = (event) => {
      if (!cartDetailsRef.current.contains(event.target)) {
        setCartDetails(false)
      }
    };
    document.addEventListener("mousedown", handlerCardDetails);
    return () => {
      document.removeEventListener("mousedown", handlerCardDetails);
    }
  })


  // ========== RETORNO DEL COMPONENTE
  return (
    <nav>
      {/* BURGER MENU MOBILE */}
      <img onClick={toggleBurgerMenu} id="hamIcon" src={iconBurgerMenu} alt="menu" className="menu" />

      {/* OPEN BURGER MENU */}
      {burgerMenu ? <BurgerMenu /> : ''}

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
          <div ref={desktopMenuRef}>
            {desktopMenu ? <Profile /> : ''}
          </div>


          {/* === CARRITO DE COMPRAS === */}
          <li onClick={toggleCartDetails} id="navbarShoppingCart" className="navbar-shopping-cart">
            <img src={iconCart} alt="shopping cart" />
            <div>2</div>
          </li>
        </ul>

        {/* === ABRIR CARRITO DE COMPRAS === */}
        <div ref={cartDetailsRef}>
          {cartDetails ? <CartDetails /> : '' }
        </div>
      </div>
    </nav>
  );
}
