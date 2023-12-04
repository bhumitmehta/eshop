import React from 'react';
import { Carousel } from "react-responsive-carousel";
 const Banner =()=>{
    const image = [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ]
    return (
        <>
        <Carousel showThumbs={false}>
        {image.map((imageUrl, index) => (
            <div key={index}>
              <img
                src={imageUrl}
                alt={`Product ${index}`}
                className="product-image"
              />
            </div>
          ))}
        </Carousel>
        </>
    );
}
export default Banner;
