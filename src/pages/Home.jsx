// import React from "react";
// import ProductList from "../components/ProductList";
// import { products } from "../data/products";

// function Home({ cart, setCart }) {
//   return <ProductList products={products} cart={cart} setCart={setCart} />;
// }

// export default Home;


// import React from "react";
// import ProductList from "../components/ProductList";
// import { products } from "../data/products";

// function Home({ cart, setCart }) {
//   return (
//     <div style={{ padding: "2rem", textAlign: "center" }}>
//       <h1>Our Products</h1>
//       <ProductList products={products} cart={cart} setCart={setCart} />
//     </div>
//   );
// }

// export default Home;


// src/pages/Home.jsx
import React from "react";
import ProductList from "../components/ProductList";
import { useSelector } from "react-redux";
import { selectFilteredProducts } from "../store/selectors";
import SearchBar from "../components/SearchBar"; // Bonus: add search here

function Home() {
  const products = useSelector(selectFilteredProducts); // From Redux + search

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Our Products</h1>
      <SearchBar />
      <ProductList products={products} /> {/* No props like cart/setCart anymore */}
    </div>
  );
}

export default Home;