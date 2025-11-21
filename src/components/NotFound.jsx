// import React from "react";
// import { useLocation } from "react-router-dom";

// function NotFound() {
//   const location = useLocation();
//   return (
//     <div>
//       <h1>404 - Page Not Found</h1>
//       <p>No match for <code>{location.pathname}</code></p>
//     </div>
//   );
// }

// export default NotFound; // ✅ default export


import React from "react";
import { useLocation } from "react-router-dom";

function NotFound() {
  const location = useLocation();
  return (
    <div style={{ textAlign: "center", padding: "100px" }}>
      <h1>404 - Page Not Found</h1>
      <p>The page <code>{location.pathname}</code> does not exist.</p>
    </div>
  );
}

export default NotFound;