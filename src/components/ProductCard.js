// ProductCard.js
import React from "react";
import { Routes,Route } from 'react-router-dom';
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
  
      <div className="product-card">
    
    <Routes>
          <Route exact path ='./${product.id}' Component={product}>
           <img src={product.thumbnail} alt={product.name} className="Img_thumbnail"/>
        <h2 className="product-title">{product.title}</h2>
        <p className="product-price">Price : ${product.price}</p>
  </Route>
  </Routes>   
       
        
   
        <p className ="product-discount">discount: {product.discountPercentage}%</p>
        <p className="product-save"><i>Save ${(product.price*product.discountPercentage/100).toFixed(2)}</i></p>
        <div className="button-container">
        <button className="add-to-cart-button">Add to Cart</button>
        <button className="buy-button">Buy</button>
        </div>
      
      </div> 

 
  );
}

export default ProductCard;




