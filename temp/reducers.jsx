// reducers.js
const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    isSingleLoading: false,
    singleProduct: {},
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_LOADING':
        return { ...state, isLoading: true };
      case 'SET_PRODUCTS':
        return { ...state, isLoading: false, products: action.payload };
      case 'SET_ERROR':
        return { ...state, isLoading: false, isError: true };
      case 'SET_SINGLE_LOADING':
        return { ...state, isSingleLoading: true };
      case 'SET_SINGLE_PRODUCT':
        return { ...state, isSingleLoading: false, singleProduct: action.payload };
      case 'SET_SINGLE_ERROR':
        return { ...state, isSingleLoading: false };
      default:
        return state;
    }
  };
  
  export default productReducer;
  