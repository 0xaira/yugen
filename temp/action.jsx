// actions.js
export const setLoading = () => ({ type: 'SET_LOADING' });
export const setProducts = (products) => ({ type: 'SET_PRODUCTS', payload: products });
export const setError = () => ({ type: 'SET_ERROR' });
export const setSingleLoading = () => ({ type: 'SET_SINGLE_LOADING' });
export const setSingleProduct = (product) => ({ type: 'SET_SINGLE_PRODUCT', payload: product });
export const setSingleError = () => ({ type: 'SET_SINGLE_ERROR' });

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const response = await fetch(API);
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      dispatch(setProducts(data));
    } catch (error) {
      dispatch(setError());
    }
  };
};

export const fetchSingleProduct = () => {
  return async (dispatch) => {
    dispatch(setSingleLoading());
    try {
      const response = await fetch(SINGLE_PRODUCT_API);
      if (!response.ok) {
        throw new Error('Failed to fetch single product');
      }
      const data = await response.json();
      dispatch(setSingleProduct(data));
    } catch (error) {
      dispatch(setSingleError());
    }
  };
};
