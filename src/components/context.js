import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
let API = "https://dummyjson.com/products?"; 
const AppContext = React.createContext();

const initialState = {
  isLoading: true,
  skip: 0,
  limit: 30,
  total: 0,
  products: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchApiData = async (url) => {
    dispatch({
        type:"Get_loading",
        // isLoading:true,
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
    fetchApiData(`${API}skip=${state.skip=30}`); 
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext }; // Corrected the export name
