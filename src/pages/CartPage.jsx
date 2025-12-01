


import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../store/cartSlice";
import { selectCartItems, selectCartTotalPrice, selectCartTotalItems } from "../store/selectors";
import { Link } from "react-router-dom";

const CartPage = () => {
  const dispatch = useDispatch();
  
  const items = useSelector(selectCartItems) || [];
  const totalPrice = useSelector(selectCartTotalPrice);
  const totalItems = useSelector(selectCartTotalItems);

  if (items.length === 0) {
    return (
      
      <div style={{

  background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
  display: "grid",
  placeItems: "center",
  padding: "2.4rem 1rem",
  fontFamily: "system-ui, sans-serif"
}}>
  <div style={{
    textAlign: "center",
    background: "white",
    padding: "2rem 1.5rem",
    borderRadius: "28px",
    boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
    maxWidth: "500px",
    animation: "fadeIn 0.8s ease-out"
  }}>
   

    <h2 style={{
      fontSize: "2.6rem",
      color: "#111",
      margin: "0 0 1rem 0",
      fontWeight: "700"
    }}>
    No items added in the cart yet!
    </h2>

    <p style={{
      fontSize: "1.25rem",
      color: "#7f8c8d",
      margin: "0 0 2.5rem 0",
      lineHeight: "1.6"
    }}>
     Your cart is empty right now.<br />
      Go to the home page and add some awesome items to your cart!
    </p>

    <Link
      to="/"
      style={{
        display: "inline-block",
        background: "linear-gradient(90deg, #a37a42, #d4a563)",
        color: "white",
        fontSize: "1.3rem",
        fontWeight: "bold",
        padding: "16px 48px",
        borderRadius: "50px",
        textDecoration: "none",
        
        transition: "all 0.4s ease"
      }}
      
    >
    Go to Home 
    </Link>
  </div>
</div>
    );
  }

  return (
    <div style={{ maxWidth: "1000px", margin: "2rem auto", padding: "2rem" ,backgroundColor: "white"}}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Your Cart ({totalItems} items)
      </h1>

     
        {items.map((item) => (
          <div
            key={item.id}
            style={{
             
              alignItems: "center",
              gap: "1rem",
              padding: "1rem",
              borderBottom: "1px solid #eee",
              backgroundColor: "white",
              marginBottom: "1rem",
              
            }}
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              loading="lazy"
              style={{ width: "80px", borderRadius: "8px" }}
            />
            <div style={{ flex: 1 }}>
              <h3 style={{ margin: "0 0 0.5rem 0" }}>{item.title}</h3>
              <p style={{ color: "#666", margin: 0 }}>₹{item.price} each</p>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <button
                onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                style={{ padding: "8px 12px" }}
              >
                -
              </button>
              <span style={{ fontWeight: "bold", minWidth: "30px", textAlign: "center", color: '#2c3e50'}}>
                {item.quantity}
              </span>
              <button
                onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                style={{ padding: "8px 12px" }}
              >
                +
              </button>
            </div>

            <div style={{ fontWeight: "bold", minWidth: "80px" }}> 
             ₹{(item.price * item.quantity).toFixed(2)}
            </div>

            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              style={{
                background: "#a37a42",
                color: "white",
                border: "none",
                padding: "10px 16px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Remove
            </button>
          </div>
        ))}
      

      <div style={{ textAlign: "right", marginTop: "2rem", fontSize: "1.5rem" , background: "white" }}>
        <h2>Total: ₹{totalPrice}</h2>
       
<Link
  to="/"
  style={{ textDecoration: "none" }}
>
  <button
    style={{
      background: "#a37a42",
      color: "white",
      padding: "15px 40px",
      fontSize: "1rem",
      border: "none",
      borderRadius: "50px",
      marginTop: "1rem",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0 8px 20px rgba(163,122,66,0.3)"
    }}
    onMouseOver={e => e.currentTarget.style.background = "#8c6329"}
    onMouseOut={e => e.currentTarget.style.background = "#a37a42"}
  >
    Back to Home
  </button>
</Link>
      </div>
    </div>
  );
};

export default CartPage;