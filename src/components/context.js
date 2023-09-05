import React, { createContext, useReducer, useContext, useEffect } from "react";
import reducer from "./reducer";

const API = "https://dummyjson.com/products?";
const AppContext = createContext();

const initialState = {
  isLoading: true,
  skip: 0,
  limit: 100,
  total: 0,
  products: [],
  searchQuery: "", 
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
    fetchApiData(`${API}skip=${state.skip}`);
  }, [state.skip]);

  useEffect(() => {
    const filteredProducts = state.products.filter((product) =>
      product.title.toLowerCase().includes(state.searchQuery.toLowerCase())
    );

    dispatch({
      type: "Get_Data",
      payload: {
        products: filteredProducts,
        skip: state.skip,
        limit: 100,
      },
    });
  }, [state.searchQuery]);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
