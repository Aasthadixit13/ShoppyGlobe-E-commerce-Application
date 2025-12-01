
import { createSelector } from '@reduxjs/toolkit';


export const selectCartItems = (state) => state.cart.items;

export const selectCartTotalItems = createSelector([selectCartItems], (items) =>
  items.reduce((total, item) => total + item.quantity, 0)
);

export const selectCartTotalPrice = createSelector([selectCartItems], (items) =>
  items
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2)
);

export const selectAllProducts = (state) => state.products.allProducts;
export const selectSearchTerm = (state) => state.products.searchTerm;


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

export const selectIsCartEmpty = createSelector(
  [selectCartItems],
  (items) => items.length === 0
);
