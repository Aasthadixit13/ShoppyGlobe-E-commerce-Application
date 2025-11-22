

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout({ cart, setCart }) {
  const navigate = useNavigate();

  // Keep your form states (now we use name in success message)
  const [name, setName] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const placeOrder = (e) => {
    e.preventDefault();
    if (cart.length === 0) return alert("Cart is empty!");

    setOrderPlaced(true);
    setCart([]);
    setTimeout(() => navigate("/"), 2000);
  };

  // Success screen — now shows the name user typed
  if (orderPlaced) {
    return (
      <div style={{ textAlign: "center", padding: "100px", fontSize: "2rem", color: "green" }}>
        <h1>Order Placed Successfully!</h1>
        <p>Thank you <strong>{name || "Customer"}</strong> for shopping!</p>
        <p>Redirecting to home...</p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto", padding: "2rem", border: "1px solid #ccc", borderRadius: "10px" }}>
      <h2 style={{ textAlign: "center" }}>Checkout</h2>
      <form onSubmit={placeOrder}>
        {/* Only added value + onChange for name — rest same as your code */}
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", margin: "10px 0" }}
        />
        <input type="email" placeholder="Email" required style={{ width: "100%", padding: "10px", margin: "10px 0" }} />
        <input type="text" placeholder="Address" required style={{ width: "100%", padding: "10px", margin: "10px 0" }} />
        <input type="tel" placeholder="Phone" required style={{ width: "100%", padding: "10px", margin: "10px 0" }} />

        <h3>Order Summary</h3>
        {cart.map(item => (
          <div key={item.id}>{item.name} × {item.quantity} = ₹{item.price * item.quantity}</div>
        ))}
        <h3>Total: ₹{total}</h3>

        <button type="submit" style={{ width: "100%", padding: "15px", background: "green", color: "white", border: "none", fontSize: "1.2rem" }}>
          Place Order
        </button>
      </form>
    </div>
  );
}

export default Checkout;