import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";

function ProductDetail({ cart, setCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p>Product not found!</p>;

  const addToCart = () => {
    setCart([...cart, { ...product, quantity: 1 }]);
    navigate("/checkout");
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>₹{product.price}</p>
      <p>{product.description}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductDetail;
