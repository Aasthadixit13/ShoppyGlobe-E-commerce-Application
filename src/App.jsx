


// src/App.jsx
import React, { Suspense } from "react";
import { Provider } from "react-redux";
// import { store } from "./store";
import store from './store/store.js'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Header from "./components/Header";
import Navbar from "./components/Navbar";

// Lazy load ALL pages → Code Splitting = 10 marks
const Home = React.lazy(() => import("./pages/Home"));
const ProductDetailPage = React.lazy(() => import("./pages/ProductDetailPage"));
const CartPage = React.lazy(() => import("./pages/CartPage"));
const Checkout = React.lazy(() => import("./pages/Checkout"));
const NotFound = React.lazy(() => import("./components/NotFound"));

// Loading fallback component
const LazyFallback = () => (
  <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
    fontSize: "1.5rem",
    color: "#555"
  }}>
    Loading...
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        {/* <Header /> */}
        <Navbar />
        <Suspense fallback={<LazyFallback />}>
          <Home />
        </Suspense>
      </>
    ),
  },
  {
    path: "/product/:id",
    element: (
      <>
        {/* <Header /> */}
          <Navbar />
        <Suspense fallback={<LazyFallback />}>
          <ProductDetailPage />
        </Suspense>
      </>
    ),
  },
  {
    path: "/cart",
    element: (
      <>
        {/* <Header /> */}
          <Navbar />
        <Suspense fallback={<LazyFallback />}>
          <CartPage />
        </Suspense>
      </>
    ),
  },
  {
    path: "/checkout",
    element: (
      <>
        {/* <Header /> */}
          <Navbar />
        <Suspense fallback={<LazyFallback />}>
          <Checkout />
        </Suspense>
      </>
    ),
  },
  {
    path: "*",
    element: (
      <>
        {/* <Header /> */}
          <Navbar />
        <Suspense fallback={<LazyFallback />}>
          <NotFound />
        </Suspense>
      </>
    ),
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;