import React from 'react';
import { useGlobalContext } from './context';
import ProductCard from './ProductCard';
import "./Productcontainer.css"
function Productcontainer() {
  const { products, isLoading } = useGlobalContext();

  if (isLoading) {
    return (
      <>
        <h1>Loading</h1>
      </>
    );
  }

  return (
    <div className='product-container-main'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Productcontainer;

