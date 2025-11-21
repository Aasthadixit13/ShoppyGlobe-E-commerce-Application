import React from "react";
import { Link } from "react-router-dom";

function ProductItem({ product, cart, setCart }) {
  const addToCart = () => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  return (
    <div>
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <Link to={`/product/${product.id}`}>View Details</Link>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductItem;
