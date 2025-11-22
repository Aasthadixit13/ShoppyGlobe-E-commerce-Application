
// export default ProductList;
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";


const ProductList = ({ products }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      gap: "2rem",
      padding: "1rem"
    }}>
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "1rem",
            background: "white",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            textAlign: "center"
          }}
        >
          <img
            src={product.thumbnail}
            alt={product.title}
            loading="lazy"  // ← ADDED: Image lazy loading
            style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "8px" }}
            onClick={() => navigate(`/product/${product.id}`)}
          />
          <h3 style={{ margin: "1rem 0 0.5rem" }}>{product.title}</h3>
          <p style={{ color: "#2e8b57", fontWeight: "bold", fontSize: "1.4rem" }}>
            ₹{product.price}
          </p>
          <button
            onClick={() => dispatch(addToCart(product))}
            style={{
              background: "#ff5722",
              color: "white",
              border: "none",
              padding: "12px 24px",
              borderRadius: "50px",
              cursor: "pointer",
              fontSize: "1rem",
              marginTop: "0.5rem"
            }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;