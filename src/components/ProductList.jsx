import React from "react";
import ProductItem from "./ProductItem";

function ProductList({ products, cart, setCart }) {
  return (
    <div>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} cart={cart} setCart={setCart} />
      ))}
    </div>
  );
}

export default ProductList;
