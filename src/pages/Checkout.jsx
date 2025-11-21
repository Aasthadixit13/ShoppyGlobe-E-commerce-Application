// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // function Checkout({ cart, setCart }) {
// //   const navigate = useNavigate();

// //   // Form state
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [address, setAddress] = useState("");
// //   const [phone, setPhone] = useState("");

// //   // Calculate total price
// //   const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

// //   // Handle order placement
// //   const placeOrder = (e) => {
// //     e.preventDefault();

// //     if (cart.length === 0) {
// //       alert("Your cart is empty!");
// //       return;
// //     }

// //     // Show order placed message
// //     alert(`Order placed successfully!\nThank you, ${name}`);

// //     // Empty the cart
// //     setCart([]);

// //     // Redirect to Home page
// //     navigate("/");
// //   };

// //   return (
// //     <div style={{ maxWidth: "600px", margin: "20px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
// //       <h2>Checkout</h2>

// //       {/* User Details Form */}
// //       <form onSubmit={placeOrder} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
// //         <input
// //           type="text"
// //           placeholder="Full Name"
// //           value={name}
// //           onChange={(e) => setName(e.target.value)}
// //           required
// //         />
// //         <input
// //           type="email"
// //           placeholder="Email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //           required
// //         />
// //         <input
// //           type="text"
// //           placeholder="Address"
// //           value={address}
// //           onChange={(e) => setAddress(e.target.value)}
// //           required
// //         />
// //         <input
// //           type="tel"
// //           placeholder="Phone Number"
// //           value={phone}
// //           onChange={(e) => setPhone(e.target.value)}
// //           required
// //         />

// //         {/* Cart Summary */}
// //         <div style={{ marginTop: "20px" }}>
// //           <h3>Order Summary</h3>
// //           {cart.length === 0 ? (
// //             <p>Your cart is empty</p>
// //           ) : (
// //             <ul>
// //               {cart.map((item) => (
// //                 <li key={item.id}>
// //                   {item.name} x {item.quantity} = ₹{item.price * item.quantity}
// //                 </li>
// //               ))}
// //             </ul>
// //           )}
// //           <h4>Total: ₹{totalPrice}</h4>
// //         </div>

// //         <button type="submit" style={{ marginTop: "15px", padding: "10px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
// //           Place Order
// //         </button>
// //       </form>
// //     </div>
// //   );
// // }

// // export default Checkout;


// // src/pages/Checkout.js
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Checkout({ cart, setCart }) {
//   const navigate = useNavigate();

//   // Form state
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [address, setAddress] = useState("");
//   const [phone, setPhone] = useState("");

//   // Success state
//   const [orderPlaced, setOrderPlaced] = useState(false);

//   // Calculate total
//   const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   const placeOrder = (e) => {
//     e.preventDefault();

//     if (cart.length === 0) {
//       alert("Your cart is empty!");
//       return;
//     }

//     // 1. Show success message on UI
//     setOrderPlaced(true);

//     // 2. Empty the cart
//     setCart([]);

//     // 3. Automatically redirect to Home after 2 seconds
//     setTimeout(() => {
//       navigate("/");
//     }, 2000);
//   };

//   // Show success screen after order is placed
//   if (orderPlaced) {
//     return (
//       <div style={{
//         textAlign: "center",
//         padding: "60px 20px",
//         fontSize: "1.5rem",
//         color: "#28a745"
//       }}>
//         <h2>Order Placed Successfully!</h2>
//         <p>Thank you, <strong>{name}</strong>! Your order has been confirmed.</p>
//         <p>Redirecting to home page...</p>
//       </div>
//     );
//   }

//   return (
//     <div style={{ maxWidth: "600px", margin: "40px auto", padding: "20px", border: "1px solid #ddd", borderRadius: "10px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
//       <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Checkout</h2>

//       <form onSubmit={placeOrder} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
//         <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required style={inputStyle} />
//         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required style={inputStyle} />
//         <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required style={inputStyle} />
//         <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required style={inputStyle} />

//         {/* Order Summary */}
//         <div style={{ marginTop: "25px", padding: "15px", backgroundColor: "#f8f9fa", borderRadius: "8px" }}>
//           <h3>Order Summary</h3>
//           {cart.length === 0 ? (
//             <p>Your cart is empty</p>
//           ) : (
//             <>
//               <ul style={{ listStyle: "none", padding: 0 }}>
//                 {cart.map((item) => (
//                   <li key={item.id} style={{ margin: "8px 0" }}>
//                     {item.name} × {item.quantity} = ₹{item.price * item.quantity}
//                   </li>
//                 ))}
//               </ul>
//               <h4 style={{ marginTop: "15px", color: "#333" }}>Total: ₹{totalPrice}</h4>
//             </>
//           )}
//         </div>

//         <button
//           type="submit"
//           style={{
//             marginTop: "20px",
//             padding: "12px",
//             backgroundColor: "#28a745",
//             color: "white",
//             border: "none",
//             borderRadius: "6px",
//             fontSize: "1.1rem",
//             cursor: "pointer"
//           }}
//         >
//           Place Order
//         </button>
//       </form>
//     </div>
//   );
// }

// // Simple reusable style
// const inputStyle = {
//   padding: "10px",
//   fontSize: "1rem",
//   borderRadius: "6px",
//   border: "1px solid #ccc"
// };

// export default Checkout;


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