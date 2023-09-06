import React from "react";
import { useGlobalContext } from "./context";
import { FaSearch } from "react-icons/fa";
import "./Search.css";

const Search = () => {
  const { searchQuery, dispatch, clearSearch } = useGlobalContext();

  const handleChange = (e) => {
    const value = e.target.value;
    dispatch({ type: "Set_Search_Query", payload: value });
   
  };
  
  const handleClear = () => {
    // Clear the search query
    dispatch({ type: "Clear_Search_Query" });
    window.location.reload();
  };

  return (
    <div className="input_wrapper">
      <FaSearch id="search_icons" />
      <input
        placeholder="Search"
        value={searchQuery}
        onChange={handleChange}
      />
      <button value ={clearSearch} onClick={handleClear}>X</button>
    </div>
  );
};

export default Search;

