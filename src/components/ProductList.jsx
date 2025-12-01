

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";




const ProductList = ({ products }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [displayedProducts, setDisplayedProducts] = useState(products);

  
  useEffect(() => {
    setDisplayedProducts(products);
  }, [products]);

  
  useEffect(() => {
    const handleFilters = (e) => {
      const { category, sort } = e.detail;

      let filtered = [...products]; 


      if (category) {
        filtered = filtered.filter(p =>
          p.category.toLowerCase().includes(category.toLowerCase())
        );
      }
     
      if (sort === "low") {
        filtered.sort((a, b) => a.price - b.price);
      } else if (sort === "high") {
        filtered.sort((a, b) => b.price - a.price);
      }

     
      setDisplayedProducts(filtered);
    };

    window.addEventListener("navbarFilters", handleFilters);

 
    return () => window.removeEventListener("navbarFilters", handleFilters);
  }, [products]); 
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(330px, 1fr))",
      gap: "2rem",
      padding: "1.5rem",
      
     
    }}>
    
      {displayedProducts.map((product) => (
        <div
          key={product.id}
          style={{
            
            border: "1px solid #eee",
          borderRadius: "16px",
          padding: "1.2rem",
          backgroundColor: "white",
          boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
          textAlign: "center",
          cursor: "pointer",
        
    transition: "transform 0.35s ease, box-shadow 0.35s ease",

    
    willChange: "transform",
    
          }}
          
        >
          
          <img
            src={product.thumbnail}
            alt={product.title}
            loading="lazy" 
            style={{ width: "60%", height: "120px", objectFit: "cover", borderRadius: "12px", transition: "transform 0.5s ease", }}
            onClick={() => navigate(`/product/${product.id}`)}
          />


          
          <h3 
          
          style={{
            margin: "1rem 0 0.5rem",
            fontSize: "1.1rem",
            fontWeight: "600",
          }}
          >{product.title}</h3>
          <p 
          
          style={{
            color: "rgb(163, 122, 66)",
            fontWeight: "bold",
            fontSize: "1.4rem",
            marginBottom: "1rem",
          }}
          >
            ₹{product.price}
          </p>


          
          <button
            onClick={() => dispatch(addToCart(product))}
            style={{
           
              display: "inline-block",
        background: "linear-gradient(90deg, #a37a42, #d4a563)",
        color: "white",
        fontSize: "1rem",
        fontWeight: "bold",
        padding: "16px 48px",
        borderRadius: "38px",
        textDecoration: "none",
       
        transition: "all 0.4s ease"
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