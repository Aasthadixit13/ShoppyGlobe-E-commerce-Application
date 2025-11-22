// src/pages/ProductDetailPage.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
// import useFetchProduct from '../hooks/useFetchProduct';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const { product, loading, error } = useFetchProduct(id); 
  
// ↓↓↓ TEMPORARY working version 
  const [product, setProduct] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.ok ? res.json() : Promise.reject('Product not found'))
      .then(data => { setProduct(data); setLoading(false); })
      .catch(err => { setError(err); setLoading(false); });
  }, [id]);
  // ↑↑↑ END temporary version ↑↑↑
  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
      navigate('/cart');
    }
  };

  if (loading) return <div style={{ padding: '4rem', textAlign: 'center', fontSize: '1.5rem' }}>Loading product...</div>;
  if (error) return <div style={{ padding: '4rem', textAlign: 'center', color: 'red' }}>Error: {error}</div>;
  if (!product) return <div style={{ padding: '4rem', textAlign: 'center' }}>Product not found</div>;

  return (
    <div style={{ maxWidth: '900px', margin: '2rem auto', padding: '2rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{product.title}</h1>
      
      {/* <img
        src={product.thumbnail}
        alt={product.title}
        style={{ maxWidth: '400px', borderRadius: '16px', boxShadow: '0 8px 20px rgba(0,0,0,0.15)' }}
      /> */}

<img
  src={product.thumbnail}
  alt={product.title}
  loading="lazy"   // ← THIS LINE ADDED – Image lazy loading
  style={{ maxWidth: '400px', borderRadius: '16px', boxShadow: '0 8px 20px rgba(0,0,0,0.15)' }}
/>
      <div style={{ margin: '2rem 0' }}>
        <h2 style={{ color: '#2e8b57', fontSize: '2rem' }}>₹{product.price}</h2>
        <p style={{ fontSize: '1.1rem', color: '#555', margin: '1.5rem 0', lineHeight: '1.6' }}>
          {product.description}
        </p>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Brand:</strong> {product.brand}</p>
        <p><strong>Rating:</strong> {product.rating} / 5</p>
      </div>

      <button
        onClick={handleAddToCart}
        style={{
          background: '#ff5722',
          color: 'white',
          padding: '16px 40px',
          fontSize: '1.3rem',
          border: 'none',
          borderRadius: '50px',
          cursor: 'pointer',
          boxShadow: '0 6px 15px rgba(255,87,34,0.4)',
          transition: 'all 0.3s'
        }}
        onMouseOver={e => e.target.style.transform = 'scale(1.05)'}
        onMouseOut={e => e.target.style.transform = 'scale(1)'}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetailPage;