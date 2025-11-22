


import PropTypes from "prop-types";
import '../styles/Cart.css';

function CartItem({ item, cart, setCart }) {
  // removeItem and updateQuantity logic
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};

export default CartItem;
