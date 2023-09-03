import React from "react";
import "./Cards.css"; // Import the CSS file

function Card({ children }) {
  return (
    <div className="product-card">
     {children}
      {/* You can display more product information here */}
    </div>
  );
}

export default Card;
