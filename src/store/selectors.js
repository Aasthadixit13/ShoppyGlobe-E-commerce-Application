// src/store/selectors.js
import { createSelector } from '@reduxjs/toolkit';

// Cart Selectors
export const selectCartItems = (state) => state.cart.items;

export const selectCartTotalItems = createSelector([selectCartItems], (items) =>
  items.reduce((total, item) => total + item.quantity, 0)
);

export const selectCartTotalPrice = createSelector([selectCartItems], (items) =>
  items
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2)
);

// Products Selectors (re-export from productsSlice + extra ones)
export const selectAllProducts = (state) => state.products.allProducts;
export const selectSearchTerm = (state) => state.products.searchTerm;

// Filtered products (best performance with memoization)
export const selectFilteredProducts = createSelector(
  [selectAllProducts, selectSearchTerm],
  (allProducts, searchTerm) => {
    if (!searchTerm.trim()) return allProducts;

    const lowerSearch = searchTerm.toLowerCase();
    return allProducts.filter(
      (product) =>
        product.title.toLowerCase().includes(lowerSearch) ||
        product.description.toLowerCase().includes(lowerSearch) ||
        product.category.toLowerCase().includes(lowerSearch)
    );
  }
);

// Extra useful selector: Check if cart is empty
export const selectIsCartEmpty = createSelector(
  [selectCartItems],
  (items) => items.length === 0
);
