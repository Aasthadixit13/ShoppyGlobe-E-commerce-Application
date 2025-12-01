# ShoppyGlobe – Modern E-Commerce Application (250 Marks)

A complete, responsive, and production-ready e-commerce web application built with **Vite + React 18 + Redux Toolkit** as a major assignment project. Users can browse real products, search instantly, add items to cart, view details, and complete a dummy checkout flow.

**Live Demo** → https://shoppyglobe-yourname.netlify.app  
**GitHub** → https://github.com/yourusername/shoppyglobe

## Features Implemented

### 1. Home Page – Product Listing (40 marks)
- Fetches real products from `https://dummyjson.com/products` using custom hook
- Beautiful responsive grid layout with product cards
- Global search bar powered by Redux (real-time filtering)
- Lazy-loaded images and smooth hover effects

### 2. Product Detail Page (20 marks)
- Dynamic route: `/product/:id`
- Fetches and displays single product details with loading & error states
- High-quality thumbnail, title, price, description, rating, and brand
- "Add to Cart" button with instant feedback

### 3. Cart Page (70 marks)
- Full Redux Toolkit state management for cart
- Add / Remove items, update quantity (minimum 1)
- Real-time total price calculation
- Clean CartItem component with increment/decrement controls
- "Proceed to Checkout" button

### 4. Checkout Page (20 marks)
- Dummy checkout form (Name, Email, Address, Phone)
- Order summary with all cart items and final total
- "Place Order" button → Success message → Cart automatically cleared → Redirect to Home

### 5. Header & Navigation (20 marks)
- Responsive navbar with logo, search bar, and cart icon
- Live cart item count badge
- Links to Home, Cart, and Checkout

### 6. 404 Not Found Page (10 marks)
- Custom error page for invalid routes
- Displays the wrong URL entered
- "Back to Home" button

### 7. Performance & Code Quality (40 marks)
- Code splitting & lazy loading using `React.lazy()` + `Suspense` for all pages
- Custom hook `useFetchProducts` for reusable API logic
- Image lazy loading (`loading="lazy"`)
- Proper keys in all lists
- Clean, reusable components with PropTypes

### 8. Routing & Responsiveness (30 marks)
- `createBrowserRouter` (React Router v6) with dynamic routes
- Fully mobile-responsive design
- Smooth navigation and loading fallbacks

### 9. Styling & User Experience (20 marks)
- Modern, clean, and professional UI
- Card-based layout with shadows and hover animations
- Consistent golden accent theme
- Mobile-first responsive grid
- Intuitive flow from browsing → cart → checkout

## Tech Stack
- Vite (mandatory – project created using `npm create vite@latest`)
- React 18 + Hooks
- Redux Toolkit (cart + search state)
- React Router v6 (`createBrowserRouter`)
- Fetch API + Custom Hooks
- Pure CSS (no Tailwind/Bootstrap)
- Lazy loading + Suspense

## Project Structure
### 1. Clone the repository

git clone https://github.com/Aasthadixit13/ShoppyGlobe-E-commerce-Application
## 🚀 Live Link  
▶️ 