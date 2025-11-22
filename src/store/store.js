import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice.js';
import productsSlice from './productsSlice.js';
import selectors from './selectors.js'; // if you have it

const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productsSlice,
    // add more slices here later
  },
});

export default store;
