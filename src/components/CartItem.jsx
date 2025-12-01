

import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../store/cartSlice";
import PropTypes from "prop-types";
import '../styles/Cartitem.css';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div 
     
    >
      <img src={item.thumbnail} alt={item.title} loading="lazy"  />
      <div >
        <h3 >{item.title}</h3>
        <p >₹{item.price} each</p>
      </div>

      <div >
        <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}>
          -
        </button>
        <span >{item.quantity}</span>
        <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>
          +
        </button>
      </div>

      <div >
        ₹{(item.price * item.quantity).toFixed(2)}
      </div>

      <button
        onClick={() => dispatch(removeFromCart(item.id))}
       
      >
        Remove
      </button>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
