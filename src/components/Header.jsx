// import React from "react";
// import { Link } from "react-router-dom";

// function Header({ cart }) {
//   return (
//     <header>
//       <nav>
//         <Link to="/">Home</Link>
//         <Link to="/checkout">Checkout</Link>
//         <span>Cart: {cart.length}</span>
//       </nav>
//     </header>
//   );
// }

// export default Header;

import React from "react";
import { Link } from "react-router-dom";

function Header({ cart }) {
  return (
    <header style={{ background: "#333", padding: "1rem", color: "white" }}>
      <nav style={{ display: "flex", justifyContent: "space-between", maxWidth: "1200px", margin: "0 auto" }}>
        <div>
          <Link to="/" style={{ color: "white", marginRight: "2rem", textDecoration: "none" }}>Home</Link>
          <Link to="/checkout" style={{ color: "white", textDecoration: "none" }}>Checkout</Link>
        </div>
        <span style={{ background: "red", padding: "5px 12px", borderRadius: "50px" }}>
          Cart: {cart.length}
        </span>
      </nav>
    </header>
  );
}

export default Header;