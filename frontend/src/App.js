import React from "react";
import "./style.css";

function App() {
  return (
    <>
      <nav>
        <div className="logo">ComputeNepal Store</div>
        <ul>
          <li>Home</li>
          <li>Laptops</li>
          <li>Smartphones</li>
          <li>Peripherals</li>
        </ul>
        <div className="search">
          <input type="search" placeholder="Search..." />
        </div>
      </nav>
    </>
  );
}

export default App;
