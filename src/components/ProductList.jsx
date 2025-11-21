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


import React from "react";
import ProductItem from "./ProductItem";

function ProductList({ products, cart, setCart }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem", marginTop: "2rem" }}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} cart={cart} setCart={setCart} />
      ))}
    </div>
  );
}

export default ProductList;