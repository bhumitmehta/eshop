import React from 'react'
import { useGlobalContext } from './context'
import {FaSearch} from "react-icons/fa"
import "./Search.css"
const Search = () => {
    // const {useGlobalContext}=
  return (
    <div className = "input_wrapper">
    <FaSearch id = "search_icons" />
        <input  placeholder='Search'/>
  
</div>
  )
}

export default Search