
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';


const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const [product, setProduct] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.ok ? res.json() : Promise.reject('Product not found'))
      .then(data => { setProduct(data); setLoading(false); })
      .catch(err => { setError(err); setLoading(false); });
  }, [id]);
  
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
    <div style={{ maxWidth: '900px', margin: '2rem auto', padding: '2rem', textAlign: 'center'}}>
    
      <div style={{ margin: '2rem 0' ,backgroundColor: "white"}}>
         <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' ,color:'#2c3e50' }}>{product.title}</h1>
         <img
  src={product.thumbnail}
  alt={product.title}
  loading="lazy" 
  style={{ maxWidth: '200px', borderRadius: '16px'}}
/>
        <h2 style={{ color: '#a37a42', fontSize: '2rem' }}>₹{product.price}</h2>
        <p style={{ fontSize: '1.1rem', color: '#555', margin: '1.5rem 0', lineHeight: '1.6' }}>
          {product.description}
        </p>
        <p style={{ color: '#2c3e50'}}><strong>Category:</strong> {product.category}</p>
        <p style={{ color: '#2c3e50'}}><strong>Brand:</strong> {product.brand}</p>
        <p style={{ color: '#2c3e50'}}><strong>Rating:</strong> {product.rating} / 5</p>
          <button
        onClick={handleAddToCart}
        style={{
          background: '#a37a42',
          color: 'white',
          padding: '16px 40px',
          fontSize: '1.3rem',
          border: 'none',
          borderRadius: '50px',
          cursor: 'pointer',
          
          transition: 'all 0.3s'
        }}
        onMouseOver={e => e.target.style.transform = 'scale(1.05)'}
        onMouseOut={e => e.target.style.transform = 'scale(1)'}
      >
        Add to Cart
      </button>
      </div>

    
    </div>
  );
};

export default ProductDetailPage;