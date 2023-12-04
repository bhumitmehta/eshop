
import React from "react";
import { useGlobalContext } from "./context";
import { FaSearch, FaTimes } from "react-icons/fa";
import "./Search.css";

const Search = () => {
  const { products, dispatch } = useGlobalContext();

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();

    // Use the original products when the search query is empty
    const filteredProducts = value
      ? products.filter((product) =>
          product.name && product.name.toLowerCase().includes(value)
        )
      : null;

    dispatch({
      type: "Set_Search_Query",
      payload: value,
      filteredProducts: filteredProducts,
    });
  };

  const handleClear = () => {
    dispatch({ type: "Clear_Search_Query" });
  };

  return (
    <div className="input_wrapper">
      <FaSearch id="search_icons" />
      <input
        placeholder="Search"
        value={products.searchQuery}
        onChange={handleChange}
      />
      {products.searchQuery && (
        <button onClick={handleClear}>
          <FaTimes />
        </button>
      )}
    </div>
  );
};

export default Search;

