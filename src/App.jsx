// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Home from "./pages/Home";
// import ProductDetail from "./components/ProductDetail";
// import Checkout from "./pages/Checkout";
// import NotFound from "./components/NotFound";

// function App() {
//   const [cart, setCart] = useState([]);

//   return (
//     <Router>
//       <Header cart={cart} />
//       <Routes>
//         <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
//         <Route path="/product/:id" element={<ProductDetail cart={cart} setCart={setCart} />} />
//         <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart} />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Home from "./pages/Home";
// import ProductDetail from "./components/ProductDetail";
// import Checkout from "./pages/Checkout";
// import NotFound from "./components/NotFound";

// function App() {
//   const [cart, setCart] = useState([]);

//   return (
//     <Router>
//       <Header cart={cart} />
//       <Routes>
//         <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
//         <Route path="/product/:id" element={<ProductDetail cart={cart} setCart={setCart} />} />
//         <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart} />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// src/App.jsx
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Provider } from "react-redux";                 // ← Added
// import { store } from "./store";                         // ← Added (your store)

// import Header from "./components/Header";               // ← You already have
// import Home from "./pages/Home";                         // ← You already have
// import ProductDetail from "./components/ProductDetail"; // ← You already have
// import Checkout from "./pages/Checkout";                 // ← You already have
// import NotFound from "./components/NotFound";            // ← You already have

// function App() {
//   // REMOVED: const [cart, setCart] = useState([]);
//   // → No more local state! Cart is now in Redux

//   return (
//     <Provider store={store}>
//       <Router>
//         <Header /> {/* ← No need to pass cart anymore */}
//         <Routes>
//           <Route path="/" element={<Home />} /> {/* ← No props needed */}
//           <Route path="/product/:id" element={<ProductDetail />} /> {/* ← No props */}
//           <Route path="/checkout" element={<Checkout />} />         {/* ← No props */}
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </Router>
//     </Provider>
//   );
// }

// export default App;



// src/App.js
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";

import Header from "./components/Header";               // ← You already have
import Home from "./pages/Home";                         // ← You already have
import ProductDetailPage from "./pages/ProductDetailPage";  // ← Updated correct import
import CartPage from "./pages/CartPage";                 // ← Added (required route)
import Checkout from "./pages/Checkout";                 // ← You already have
import NotFound from "./components/NotFound";            // ← You already have

// ─────────────────────────────── NEW MODERN ROUTING ─────────────────────────────── //
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
      </>
    ),
  },
  {
    path: "/product/:id",           // ← Dynamic parameter – fully satisfied
    element: (
      <>
        <Header />
        <ProductDetailPage />
      </>
    ),
  },
  {
    path: "/cart",                  // ← Cart route added
    element: (
      <>
        <Header />
        <CartPage />
      </>
    ),
  },
  {
    path: "/checkout",
    element: (
      <>
        <Header />
        <Checkout />
      </>
    ),
  },
  {
    path: "*",
    element: (
      <>
        <Header />
        <NotFound />
      </>
    ),
  },
]);
// ───────────────────────────────────────────────────────────────────────────────── //

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;