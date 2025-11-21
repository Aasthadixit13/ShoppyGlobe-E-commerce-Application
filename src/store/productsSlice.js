// src/store/productsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    allProducts: [], // Original list from API
    searchTerm: '', // Search input value
  },
  reducers: {
    setProducts(state, action) {
      state.allProducts = action.payload;
    },
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },
});

// Selector to get filtered products
export const selectFilteredProducts = (state) => {
  const { allProducts, searchTerm } = state.products;
  if (!searchTerm.trim()) return allProducts;

  return allProducts.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export const { setProducts, setSearchTerm } = productsSlice.actions;
export default productsSlice.reducer;
