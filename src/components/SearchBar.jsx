

import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../store/productsSlice';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <div style={{ margin: '1.5rem 0', textAlign: 'center'}}>
      <input
        type="text"
        placeholder="Search products..."
        onChange={handleSearch}
        
       style={{
 
  border: '1px solid #ddd',
  padding: '8px 14px',
  borderRadius: '10px',
  cursor: 'pointer',
  // color: '#fff'   
}}

      />
    </div>
  );
};

export default SearchBar;