import React from 'react';
import { useGlobalContext } from './context';
import ProductCard from './ProductCard';

function Data() {
  const { products, isLoading } = useGlobalContext();

  if (isLoading) {
    return (
      <>
        <h1>Loading</h1>
      </>
    );
  }

  return (
    <>
      {products.map((product) => (
        <div className='product-container'>
        <ProductCard key={product.id} product={product} />

        </div>
      ))}
    </>
  );
}

export default Data;

