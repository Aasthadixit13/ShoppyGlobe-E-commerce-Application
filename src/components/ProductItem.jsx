



import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const ProductItem = ({ product, discount = 0 }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
 
  const favorites = useSelector((state) => state.favorites?.items || []);
  const isFavorite = favorites.includes(product.id);

  const handleToggleFavorite = (e) => {
    e.stopPropagation();
 
    console.log("Toggle favorite:", product.id);
  };

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div
        className="card shadow-sm h-100 position-relative overflow-hidden"
        style={{ borderRadius: "15px", border: "none" }}
      >
    
        <button
          onClick={handleToggleFavorite}
          className="position-absolute top-0 end-0 m-2 btn btn-sm rounded-circle shadow-sm border-0 bg-white z-3"
          style={{ width: "36px", height: "36px" }}
        >
          <i
            className={`fa-heart ${isFavorite ? "fa-solid text-danger" : "fa-regular"}`}
            style={{ fontSize: "18px" }}
          ></i>
        </button>

       
        <img
          src={product.thumbnail || product.image}
          alt={product.title}
          className="card-img-top p-3"
          style={{ height: "180px", objectFit: "contain", cursor: "pointer" }}
          onClick={() => navigate(`/product/${product.id}`)}
        />

       
        <div className="card-body d-flex flex-column p-3">
          <h6 className="card-title mb-2 text-dark" style={{ fontSize: "0.95rem", lineHeight: "1.3" }}>
            {product.title.length > 50
              ? `${product.title.substring(0, 50)}...`
              : product.title}
          </h6>

          <p className="mb-2">
            <strong style={{ fontSize: "1.4rem" }}>₹{product.price}</strong>
          </p>

        
          <p className="text-warning mb-2">
            ⭐ {product.rating?.rate || 4.1}{" "}
            <span className="text-muted small">
              ({product.rating?.count || 259} reviews)
            </span>
          </p>

        
          <div className="mb-3">
            <span className="badge bg-light text-dark me-2 border">
              {product.category || "men's clothing"}
            </span>
            {discount > 0 && (
              <span className="badge bg-light text-dark border">
                {discount}% off
              </span>
            )}
          </div>

        
          <div className="mt-auto d-flex gap-2">
            <button
              onClick={() => dispatch(addToCart(product))}
              className="btn btn-outline-secondary btn-sm flex-fill d-flex align-items-center justify-content-center gap-1"
            >
              <i className="fa fa-cart-plus"></i> Add
            </button>
            <button
              onClick={() => navigate(`/product/${product.id}`)}
              className="btn btn-outline-secondary btn-sm flex-fill"
            >
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string,
    image: PropTypes.string,
    rating: PropTypes.shape({
      rate: PropTypes.number,
      count: PropTypes.number,
    }),
    category: PropTypes.string,
  }).isRequired,
  discount: PropTypes.number,
};

export default ProductItem;