// import React from "react";

// function CartItem({ item, cart, setCart }) {
//   const removeItem = () => {
//     setCart(cart.filter((i) => i.id !== item.id));
//   };

//   const updateQuantity = (e) => {
//     const updatedCart = cart.map((i) => i.id === item.id ? { ...i, quantity: Number(e.target.value) } : i);
//     setCart(updatedCart);
//   };

//   return (
//     <div>
//       <h4>{item.name}</h4>
//       <p>₹{item.price}</p>
//       <input type="number" value={item.quantity} onChange={updateQuantity} min="1" />
//       <button onClick={removeItem}>Remove</button>
//     </div>
//   );
// }

// export default CartItem;


import PropTypes from "prop-types";

function CartItem({ item, cart, setCart }) {
  // removeItem and updateQuantity logic
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};

export default CartItem;
