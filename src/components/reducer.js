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
      case "Set_Filtered_Products":
        return {
          ...state,
          filteredProducts: action.payload,
        };
        // case "Re_Get_Data":
        //   return  {
        //         ...state,
        //         products: action.payload.products,
        //     };
        case "Clear_Search_Query":
      return {
        ...state,
        searchQuery: "",
      };
      case "Next_Page":
        let currentPage = state.currentPage;
        if (currentPage>4){
         state.currentPage =1;
        }
        return {
          ...state,
          currentPage: state.currentPage+1,
        };
  
      case "Prev_Page":
        let currentPag = state.currentPage-1;
        if (currentPag<=0){
          state.currentPage=1;
        }
        return {
          ...state,
        
          currentPage: state.currentPage - 1,
        };

      default:
        return state;
    }
  };
  
  export default reducer;
  
  