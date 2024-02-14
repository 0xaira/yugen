// selectors.js
export const selectProducts = (state) => state.products.products;
export const selectSingleProduct = (state) => state.products.singleProduct;
export const selectLoading = (state) => state.products.isLoading;
export const selectSingleLoading = (state) => state.products.isSingleLoading;
export const selectError = (state) => state.products.isError;
