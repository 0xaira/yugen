// appStore.js
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";

const initialState = {
  products: [], // Initial state for products
};

const rootReducer = {
  cart: cartSlice,
  products: productSlice, // Include productSlice in rootReducer
};

const appStore = configureStore({
  reducer: rootReducer,
  preloadedState: initialState, // Initial state including products
});

export default appStore;
