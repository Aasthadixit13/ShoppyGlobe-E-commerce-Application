

import React from "react";
import { Link } from "react-router-dom";

function ProductItem({ product, cart, setCart }) {
  const addToCart = () => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  return (
    <div style={{ border: "1px solid #ddd", padding: "1.5rem", borderRadius: "10px", background: "white" }}>
      <h3>{product.name}</h3>
      <p style={{ fontSize: "1.4rem", color: "green" }}>₹{product.price}</p>
      <Link to={`/product/${product.id}`} style={{ color: "blue", textDecoration: "underline" }}>
        View Details
      </Link>
      <br /><br />
      <button onClick={addToCart} style={{ background: "#007bff", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px" }}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductItem;