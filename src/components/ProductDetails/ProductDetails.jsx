import "./product-details.css";

// ========== IMAGES
import iconAddToCart from "../../assets/icons/bt_add_to_cart.svg";
import iconClose from "../../assets/icons/icon_close.png";

// ========== COMPONENTS

export default function ProductDetails(props) {
  // const [closeProductDetails, setCloseProductDetails] = useState(true);

  const onCloseProductDetails = () => {
    props.setProductDetails(false);
  };

  return (
    <aside id="productDetailSecondary" className="product-detail-secondary">
      <div
        onClick={onCloseProductDetails}
        id="productDetailSecondaryClose"
        className="product-detail-secondary-close"
      >
        <img src={iconClose} alt={"close"} />
      </div>
      <img src={props.image} alt={props.title} />
      <div className="product-detail-secondary-info">
        <p>${props.price}</p>
        <p>{props.title}</p>
        <p>{props.description}</p>
      </div>
      <div></div>
      <button className="primary-button add-to-cart-button">
        <img src={iconAddToCart} alt="add to cart" />
        Add to cart
      </button>
    </aside>
  );
}
