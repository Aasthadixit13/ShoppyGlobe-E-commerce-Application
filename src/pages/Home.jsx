
import React, { useEffect } from "react";
import ProductList from "../components/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../store/productsSlice";
import { selectFilteredProducts } from "../store/selectors";
import useFetchProducts from "../hooks/useFetchProducts";


function Home() {
  const dispatch = useDispatch();
  const products = useSelector(selectFilteredProducts);
  const { products: fetchedProducts, loading, error } = useFetchProducts();

  useEffect(() => {
    if (fetchedProducts.length > 0) {
      dispatch(setProducts(fetchedProducts));
    }
  }, [fetchedProducts, dispatch]);

  if (loading)
    return (
      <div style={{ padding: "4rem", textAlign: "center" }}>
        Loading products...
      </div>
    );
  if (error)
    return (
      <div
        style={{ padding: "4rem", textAlign: "center", color: "red" }}
      >
        Error: {error}
      </div>
    );

  return (
   
    <>
    <h1 style={{ fontSize: "2.5rem", textAlign: "center",marginBottom: "1rem" }}>
        Our Products
      </h1>

      <ProductList products={products} />
    </>
      
  

   
  );
}

export default Home;
