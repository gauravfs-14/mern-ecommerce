import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to={"/"}>
        <div className="logo">ComputeNepal Store</div>
      </Link>
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
  );
}

export default Navbar;
