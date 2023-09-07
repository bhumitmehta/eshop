import React,{useEffect, useState} from "react";
import { useParams } from "react-router-dom";
export default function Productpage() {

const{id} = useParams();
const[product,setProduct] =useState([]);
const[loading,setLoading] = useState(false);
useEffect(()=>{
    const getProduct = async() =>{
        setLoading(true);
        const fetchApi = await fetch('https://dummyjson.com/products/${id}');
        setProduct(await response.json());
        setLoading(false);
    }
    getProduct();
},[input]);
return(
    <>
    </>
)

}