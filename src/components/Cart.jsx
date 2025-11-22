import React from "react";
import CartItem from "./CartItem";
import '../styles/Cart.css';

function Cart({ cart, setCart }) {
  return (
    <div>
      {cart.length === 0 ? <p>Cart is empty</p> : cart.map((item) => (
        <CartItem key={item.id} item={item} cart={cart} setCart={setCart} />
      ))}
    </div>
  );
}

export default Cart;
