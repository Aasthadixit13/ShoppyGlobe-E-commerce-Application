
import React, { Suspense } from "react";           
import { Provider } from "react-redux";
import store from "./store/store.js";



import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const Home = React.lazy(() => import("./pages/Home"));
const ProductDetailPage = React.lazy(() => import("./pages/ProductDetailPage"));
const CartPage = React.lazy(() => import("./pages/CartPage"));
const Checkout = React.lazy(() => import("./pages/Checkout"));
const About = React.lazy(() => import("./pages/About"));
const Faqs = React.lazy(() => import("./pages/Faqs"));
const Contact = React.lazy(() => import("./pages/Contact"));
const NotFound = React.lazy(() => import("./components/NotFound"));


const LazyFallback = () => (
  
  <div
    style={{
      padding: "100px",
      textAlign: "center",
      fontSize: "1.8rem",
      color: "#666",
    }}
  >
    Loading...
  </div>
);


const Layout = () => (
  <>
    <Navbar />
    <main >
      <Suspense fallback={<LazyFallback />}>
        <Outlet />               
      </Suspense>
    </main>
    <Footer />
  </>
);


const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/product/:id", element: <ProductDetailPage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/about", element: <About /> },
      { path: "/faqs", element: <Faqs /> },
      { path: "/contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
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