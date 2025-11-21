// // src/pages/CartPage.jsx
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeFromCart, updateQuantity, clearCart } from '../store/cartSlice';
// import { selectCartItems, selectCartTotalPrice, selectCartTotalItems } from '../store/selectors';
// import { Link } from 'react-router-dom';

// const CartPage = () => {
//   const dispatch = useDispatch();
//   const items = useSelector(selectCartItems);
//   const totalPrice = useSelector(selectCartTotalPrice);
//   const totalItems = useSelector(selectCartTotalItems);

//   if (items.length === 0) {
//     return (
//       <div style={{ textAlign: 'center', padding: '4rem' }}>
//         <h2>Your cart is empty</h2>
//         <Link to="/" style={{ color: '#ff5722', fontSize: '1.2rem' }}>Continue Shopping</Link>
//       </div>
//     );
//   }

//   return (
//     <div style={{ maxWidth: '1000px', margin: '2rem auto', padding: '2rem' }}>
//       <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Your Cart ({totalItems} items)</h1>

//       <div style={{ background: '#f9f9f9', borderRadius: '12px', padding: '1.5rem' }}>
//         {items.map(item => (
//           <div key={item.id} style={{
//             display: 'flex',
//             alignItems: 'center',
//             gap: '1rem',
//             padding: '1rem',
//             borderBottom: '1px solid #eee',
//             marginBottom: '1rem'
//           }}>
//             <img src={item.thumbnail} alt={item.title} style={{ width: '80px', borderRadius: '8px' }} />
            
//             <div style={{ flex: 1 }}>
//               <h3 style={{ margin: '0 0 0.5rem 0' }}>{item.title}</h3>
//               <p style={{ color: '#666', margin: 0 }}>₹{item.price} each</p>
//             </div>

//             <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
//               <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
//                 style={{ padding: '8px 12px' }}>-</button>
//               <span style={{ fontWeight: 'bold', minWidth: '30px', textAlign: 'center' }}>{item.quantity}</span>
//               <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
//                 style={{ padding: '8px 12px' }}>+</button>
//             </div>

//             <div style={{ fontWeight: 'bold', minWidth: '80px' }}>
//               ₹{(item.price * item.quantity).toFixed(2)}
//             </div>

//             <button
//               onClick={() => dispatch(removeFromCart(item.id))}
//               style={{ background: '#e74c3c', color: 'white', border: 'none', padding: '10px', borderRadius: '6px', cursor: 'pointer' }}
//             >
//               Remove
//             </button>
//           </div>
//         ))}
//       </div>

//       <div style={{ textAlign: 'right', marginTop: '2rem', fontSize: '1.5rem' }}>
//         <h2>Total: ₹{totalPrice}</h2>
//         <button style={{
//           background: '#27ae60',
//           color: 'white',
//           padding: '15px 40px',
//           fontSize: '1.3rem',
//           border: 'none',
//           borderRadius: '50px',
//           marginTop: '1rem',
//           cursor: 'pointer'
//         }}>
//           Proceed to Checkout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CartPage;

// src/components/ProductList.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";

const ProductList = ({ products }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      gap: "2rem",
      padding: "1rem"
    }}>
      {products.map((product) => (
        <div
          key={product.id} // UNIQUE KEY – REQUIRED
          style={{
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "1rem",
            background: "white",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            textAlign: "center"
          }}
        >
          <img
            src={product.thumbnail}
            alt={product.title}
            style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "8px" }}
            onClick={() => navigate(`/product/${product.id}`)}
          />
          <h3 style={{ margin: "1rem 0 0.5rem" }}>{product.title}</h3>
          <p style={{ color: "#2e8b57", fontWeight: "bold", fontSize: "1.4rem" }}>
            ₹{product.price}
          </p>
          <button
            onClick={() => dispatch(addToCart(product))}
            style={{
              background: "#ff5722",
              color: "white",
              border: "none",
              padding: "12px 24px",
              borderRadius: "50px",
              cursor: "pointer",
              fontSize: "1rem",
              marginTop: "0.5rem"
            }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;