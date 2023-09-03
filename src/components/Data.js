import React, { useEffect } from "react";
import { useGlobalContext } from "./context";
import Card from "./Card";
const Data =()=>
{
   const {products,skip,isLoading }= useGlobalContext();
   
        if(isLoading){
            return(
                <>
                <h1>Loading</h1>
                </>
            );
        }
        return(
            <>
           
             {products.map((product)=>{
                const {id,title,despcription,price ,discountPercentage,stock,rating,brand,category,thumdnail,images} = product;
     return ( 
        <Card key ={product.id}>
     <div  >
                <img  src={product.thumbnail} alt={product.name} />
     <h2 >
        {product.title}</h2>
     
         </div>
         </Card>);
  })}  
          </>
        );
    
}
export default Data;

