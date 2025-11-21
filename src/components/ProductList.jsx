// import React from "react";
// import ProductItem from "./ProductItem";

// function ProductList({ products, cart, setCart }) {
//   return (
//     <div>
//       {products.map((product) => (
//         <ProductItem key={product.id} product={product} cart={cart} setCart={setCart} />
//       ))}
//     </div>
//   );
// }

// export default ProductList;


// import React from "react";
// import ProductItem from "./ProductItem";

// function ProductList({ products, cart, setCart }) {
//   return (
//     <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem", marginTop: "2rem" }}>
//       {products.map((product) => (
//         <ProductItem key={product.id} product={product} cart={cart} setCart={setCart} />
//       ))}
//     </div>
//   );
// }

// export default ProductList;

import React from "react";
import ProductItem from "./ProductItem";
import useFetchProducts from "../hooks/useFetchProducts";  // Our custom hook

function ProductList({ cart, setCart }) {
  const { products, loading, error } = useFetchProducts();

  if (loading) {
    return <div style={{ textAlign: "center", padding: "4rem", fontSize: "1.5rem" }}>Loading products...</div>;
  }

  if (error) {
    return (
      <div style={{ textAlign: "center", padding: "4rem", color: "red" }}>
        <h2>Error Loading Products</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()} style={{ padding: "10px 20px", marginTop: "1rem" }}>
          Retry
        </button>
      </div>
    );
  }

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "2rem",
      marginTop: "2rem"
    }}>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          cart={cart}
          setCart={setCart}
        />
      ))}
    </div>
  );
}

export default ProductList;