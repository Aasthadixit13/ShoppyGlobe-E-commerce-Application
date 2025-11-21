// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { products } from "../data/products";

// function ProductDetail({ cart, setCart }) {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const product = products.find((p) => p.id === parseInt(id));

//   if (!product) return <p>Product not found!</p>;

//   const addToCart = () => {
//     setCart([...cart, { ...product, quantity: 1 }]);
//     navigate("/checkout");
//   };

//   return (
//     <div>
//       <h2>{product.name}</h2>
//       <p>₹{product.price}</p>
//       <p>{product.description}</p>
//       <button onClick={addToCart}>Add to Cart</button>
//     </div>
//   );
// }

// export default ProductDetail;

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";

function ProductDetail({ cart, setCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <h2>Product Not Found</h2>;

  const addToCart = () => {
    setCart([...cart, { ...product, quantity: 1 }]);
    navigate("/checkout");
  };

  return (
    <div style={{ padding: "3rem", textAlign: "center" }}>
      <h1>{product.name}</h1>
      <h2 style={{ color: "green" }}>₹{product.price}</h2>
      <p style={{ fontSize: "1.2rem", margin: "2rem 0" }}>{product.description}</p>
      <button onClick={addToCart} style={{ background: "orange", color: "white", padding: "15px 30px", fontSize: "1.2rem", border: "none", borderRadius: "8px" }}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetail;
