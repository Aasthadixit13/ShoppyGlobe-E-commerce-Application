
// src/components/SearchBar.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../store/productsSlice';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <div style={{ margin: '1.5rem 0', textAlign: 'center' }}>
      <input
        type="text"
        placeholder="Search products by name, description or category..."
        onChange={handleSearch}
        style={{
          padding: '14px 20px',
          width: '100%',
          maxWidth: '600px',
          fontSize: '1.1rem',
          borderRadius: '50px',
          border: '2px solid #ddd',
          outline: 'none',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        }}
      />
    </div>
  );
};

export default SearchBar;