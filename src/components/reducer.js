const reducer = (state, action) => {
    switch (action.type) {
      case "Get_loading":
        return {
          ...state,
          isLoading: true,
        };
      case "Get_Data":
        return {
          ...state,
          isLoading: false,
          products: action.payload.products,
          skip: action.payload.skip,
        };
      case "Set_Search_Query":
        return {
          ...state,
          searchQuery: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  