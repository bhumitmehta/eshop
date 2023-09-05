// ProductCard.js
import React from "react";

import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    
      <div className="product-card">
        <img src={product.thumbnail} alt={product.name} />
        <h2 className="product-title">{product.title}</h2>
        <p className="product-price">${product.price}</p>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
 
  );
}

export default ProductCard;




