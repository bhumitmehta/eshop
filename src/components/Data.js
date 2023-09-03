import React, { useEffect } from "react";
import { useGlobalContext } from "./context";
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
     return <h2 key ={product.id}>{product.id} {
         product.title}</h2>
  })}
            </>
        );
    
}
export default Data;

// {products.map((product)=>{
//     return <h2 key ={product.id}>{
//         product.title}</h2>
//  })}