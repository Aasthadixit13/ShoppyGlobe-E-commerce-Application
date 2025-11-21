// src/components/Navbar.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartTotalItems } from '../store/selectors';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const cartItemsCount = useSelector(selectCartTotalItems);

  return (
    <nav style={{
      background: '#333',
      color: 'white',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
    }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
        <h2 style={{ margin: 0 }}>ShopKaro</h2>
      </Link>

      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem' }}>
          Home
        </Link>
        <Link 
          to="/cart" 
          style={{ 
            color: 'white', 
            textDecoration: 'none', 
            background: '#e91e63', 
            padding: '10px 20px', 
            borderRadius: '50px',
            fontWeight: 'bold',
            position: 'relative'
          }}
        >
          Cart ({cartItemsCount})
          {cartItemsCount > 0 && (
            <span style={{
              position: 'absolute',
              top: '-8px',
              right: '-8px',
              background: 'red',
              color: 'white',
              borderRadius: '50%',
              width: '24px',
              height: '24px',
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {cartItemsCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;