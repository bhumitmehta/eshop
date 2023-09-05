import React, { useState } from "react";
import { useGlobalContext } from "./context";
import { FaSearch } from "react-icons/fa";
import "./Search.css";

const Search = () => {
  const { products } = useGlobalContext();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    // Filter products based on the search query
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredProducts(filteredProducts);
  };

  return (
    <div className="input_wrapper">
      <FaSearch id="search_icons" />
      <input
        placeholder="Search"
        value={searchQuery}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;


