import React from "react";
import { Link } from "react-router-dom";

function Header({ cart }) {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/checkout">Checkout</Link>
        <span>Cart: {cart.length}</span>
      </nav>
    </header>
  );
}

export default Header;
