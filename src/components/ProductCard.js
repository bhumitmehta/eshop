import React from "react";
import { Link } from 'react-router-dom';
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <img src={product.thumbnail} alt={product.name} className="Img_thumbnail" />
        <h2 className="product-title">{product.title}</h2>
        <p className="product-price">Price : ${product.price}</p>
      </Link>
      <p className="product-discount">Discount: {product.discountPercentage}%</p>
      <p className="product-save"><i>Save ${(product.price * (product.discountPercentage / 100)).toFixed(2)}</i></p>
      <div className="button-container">
        <button className="add-to-cart-button-page">Add to Cart</button>
        <button className="buy-button-page">Buy</button>
      </div>
    </div>
  );
}

export default ProductCard;

