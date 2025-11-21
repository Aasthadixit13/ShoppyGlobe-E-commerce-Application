import React from "react";
import ProductList from "../components/ProductList";
import { products } from "../data/products";

function Home({ cart, setCart }) {
  return <ProductList products={products} cart={cart} setCart={setCart} />;
}

export default Home;
