// src/ProductCard.js

import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = (props:any) => {
  return (
    <div className="product-card-one">
      <div className="product-card-image">
        <img src={props?.image} alt={props?.title} />
      </div>
      <div className="product-card-body">
        <div className="product-tags-one">
          <span className="tag recommended">{props?.tag}</span>
          <span className="tag instant">{props?.deliveryType}</span>
        </div>
        <h3 className="product-title">{props?.title}</h3>
        <Link to="/checkout-page">
        <button className="add-to-cart-button">Buy Now</button>
        </Link>
      </div>
      
    </div>
  );
};

export default ProductCard;
