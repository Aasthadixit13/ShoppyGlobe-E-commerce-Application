


import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCartTotalItems } from "../store/selectors";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";
import "../styles/Navbar.css";

const Navbar = () => {
  const cartItemsCount = useSelector(selectCartTotalItems);
  const location = useLocation();
  

  
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

 
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSort, setSelectedSort] = useState("");

  
  useEffect(() => {
   
    window.dispatchEvent(
      new CustomEvent("navbarFilters", {
        detail: { category: selectedCategory, sort: selectedSort },
      })
    );
  }, [selectedCategory, selectedSort]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  
  const handleSortChange = (e) => {
    setSelectedSort(e.target.value);
  };

 
  const handleClear = () => {
    setSelectedCategory("");
    setSelectedSort("");
  };
  return (
    <header className={`navbar-header ${darkMode ? "dark" : ""}`}>
      <nav className="navbar">

       
        <div className="nav-left">
          <Link to="/" className="navbar-logo">
            <h2>ShopKaro</h2>
          </Link>
        </div>

    
          <SearchBar />
      
        <div className="nav-right">

           <select
            className="nav-select"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">All categories</option>
            <option value="beauty">Beauty</option>
            <option value="furniture">Furniture</option>
            <option value="groceries">Groceries</option>
          </select> 
       <select
            className="nav-select"
            value={selectedSort}
            onChange={handleSortChange}
          >
            <option value="">Sort by price</option>
            <option value="low">Low to High</option>
            <option value="high">High to Low</option>
          </select>
        <button className="clear-btn" onClick={handleClear}>
            Clear
          </button>
        

          <button
            className="clear-btn"
            onClick={() => setDarkMode(!darkMode)}
            style={{ minWidth: "110px" }} 
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>

          
          <Link
            to="/cart"
            className={`cart-chip ${
              location.pathname === "/cart" ? "active" : ""
            }`}
          >
            Cart
            {cartItemsCount > 0 && (
              <span className="cart-badge">{cartItemsCount}</span>
            )}
          </Link>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;


