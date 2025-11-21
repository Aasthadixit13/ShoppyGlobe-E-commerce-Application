import React from "react";
import { useLocation } from "react-router-dom";

function NotFound() {
  const location = useLocation();
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>No match for <code>{location.pathname}</code></p>
    </div>
  );
}

export default NotFound; // ✅ default export
