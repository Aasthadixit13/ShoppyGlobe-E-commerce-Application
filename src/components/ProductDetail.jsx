

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";



function ProductDetail({ cart, setCart }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Product not found or server error");
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const addToCart = () => {
    if (product) {
      setCart([...cart, { ...product, quantity: 1 }]);
      navigate("/checkout");
    }
  };

  if (loading) {
    return <div style={{ padding: "3rem", textAlign: "center" }}>Loading product details...</div>;
  }

  if (error) {
    return (
      <div style={{ padding: "3rem", textAlign: "center", color: "red" }}>
        <h2>Product Not Found</h2>
        <p>{error}</p>
        <button onClick={() => navigate("/")} style={{ marginTop: "1rem", padding: "10px 20px" }}>
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: "3rem", textAlign: "center" }}>
      <h1>{product.title}</h1>
      <img
        src={product.thumbnail}
        alt={product.title}
        style={{ maxWidth: "350px", borderRadius: "12px", margin: "1.5rem 0" }}
      />
      <h2 style={{ color: "green" }}>₹{product.price}</h2>
      <p style={{ fontSize: "1.2rem", margin: "2rem 0", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
        {product.description}
      </p>
      <button
        onClick={addToCart}
        style={{
          background: "orange",
          color: "white",
          padding: "15px 30px",
          fontSize: "1.2rem",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetail;
