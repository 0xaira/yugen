// productSlice.js
import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    setProducts: (state, action) => {
      return action.payload; // Replace existing products with new ones
    },
  },
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;
