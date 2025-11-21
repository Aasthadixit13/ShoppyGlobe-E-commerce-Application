// import React from "react";
// import ProductList from "../components/ProductList";
// import { products } from "../data/products";

// function Home({ cart, setCart }) {
//   return <ProductList products={products} cart={cart} setCart={setCart} />;
// }

// export default Home;


import React from "react";
import ProductList from "../components/ProductList";
import { products } from "../data/products";

function Home({ cart, setCart }) {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Our Products</h1>
      <ProductList products={products} cart={cart} setCart={setCart} />
    </div>
  );
}

export default Home;