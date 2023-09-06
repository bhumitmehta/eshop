// context.js

import React, { createContext, useReducer, useContext, useEffect } from "react";
import reducer from "./reducer";

const API = "https://dummyjson.com/products?";
const AppContext = createContext();

const initialState = {
  isLoading: true,
  skip: 0,
  limit: 30,
  total: 0,
  products: [],
  searchQuery: "",
  clearSearch: "",
  currentPage: 1, // Add currentPage property
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchApiData = async (url) => {
    dispatch({
      type: "Get_loading",
    });
    try {
      const data = await fetch(url);
      const apidata = await data.json();
      dispatch({
        type: "Get_Data",
        payload: {
          products: apidata.products,
          skip: apidata.skip,
        },
      });
      console.log(apidata);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiData(`${API}skip=${(state.currentPage - 1) * state.limit}`);
  }, [state.currentPage]);

  useEffect(() => {
    const filteredProducts = state.products.filter((product) =>
      product.title.toLowerCase().includes(state.searchQuery.toLowerCase())
    );

    dispatch({
      type: "Get_Data",
      payload: {
        products: filteredProducts,
        skip: 0,
        limit: 100,
      },
    });
  }, [state.searchQuery]);

  const getNextPage = () => {
    dispatch({
      type: "Next_Page",
    });
  };

  const getPrevPage = () => {
    dispatch({
      type: "Prev_Page",
    });
  };

  return (
    <AppContext.Provider value={{ ...state, dispatch, getNextPage, getPrevPage }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
