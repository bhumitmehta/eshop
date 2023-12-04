import React from 'react';
import { useGlobalContext } from './context';
import ProductCard from './ProductCard';
import "./Productcontainer.css";
import Pagination from './Pagination';
import Banner from './Banner';

function Productcontainer() {
  const { products, isLoading } = useGlobalContext();

  if (isLoading) {
    return (
      <>
        <h1>Loading</h1>
      </>
    );
  }

  return (<>
    <div className='product-container-main'>
      <Banner/>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    
        <Pagination />
    </div>
    </>
  );
}

export default Productcontainer;

