import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Productpage.css";
const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Fetch product details using the product id from the URL parameter
      const fetchProductDetails = async () => {
        try {
          const response = await fetch(`https://dummyjson.com/products/${id}`);
          const data = await response.json();
          setProduct(data);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching product details:", error);
          setLoading(false);
        }
      };
  
      fetchProductDetails();
    }, [id]);
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    return (
      <div className="product-details">
        <div className="product-carousel">
           <Carousel showThumbs={true}>
          {product.images.map((imageUrl, index) => (
            <div key={index}>
              <img
                src={imageUrl}
                alt={`Product ${index}`}
                className="product-image"
              />
            </div>
          ))}
        </Carousel>
        </div>
        <div className="product-page-detail">
        <h2>{product.title}</h2>
        <h4>:Description: {product.description}</h4>
        <p>Price: ${product.price}</p>
        <p>Discount: {product.discountPercentage}%</p>
        <p>Save: ${(product.price * (product.discountPercentage / 100)).toFixed(2)}</p>
        <p>{product.category}</p>
        <p>{product.stock}</p>
        <p>{product.rating}</p>
        <p>{product.brand}</p>
        <button className="add-to-cart-button">Add to Cart</button>
        <button className="buy-button">Buy</button>
        </div>
      </div>
    );
  };
  export default ProductPage;