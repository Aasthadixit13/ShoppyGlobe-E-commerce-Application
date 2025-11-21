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
// import React from "react";
// import ProductList from "../components/ProductList";
// import { useSelector } from "react-redux";
// import { selectFilteredProducts } from "../store/selectors";
// import SearchBar from "../components/SearchBar"; // Bonus: add search here

// function Home() {
//   const products = useSelector(selectFilteredProducts); // From Redux + search

//   return (
//     <div style={{ padding: "2rem", textAlign: "center" }}>
//       <h1>Our Products</h1>
//       <SearchBar />
//       <ProductList products={products} /> {/* No props like cart/setCart anymore */}
//     </div>
//   );
// }

// export default Home;

// src/pages/Home.jsx
import React, { useEffect } from "react";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../store/productsSlice";
import { selectFilteredProducts } from "../store/selectors";
import useFetchProducts from "../hooks/useFetchProducts";  // ← ADD THIS

function Home() {
  const dispatch = useDispatch();
  const products = useSelector(selectFilteredProducts);
  const { products: fetchedProducts, loading, error } = useFetchProducts();  // ← FETCH HERE

  // ← THIS IS THE MISSING PART – DISPATCH TO REDUX
  useEffect(() => {
    if (fetchedProducts.length > 0) {
      dispatch(setProducts(fetchedProducts));
    }
  }, [fetchedProducts, dispatch]);

  if (loading) return <div style={{ padding: "4rem", textAlign: "center" }}>Loading products...</div>;
  if (error) return <div style={{ padding: "4rem", textAlign: "center", color: "red" }}>Error: {error}</div>;

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Our Products</h1>
      <SearchBar />
      <ProductList products={products} />
    </div>
  );
}

export default Home;