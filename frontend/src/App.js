import React from "react";
import { products } from "./data";
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
      <div className="products-container">
        {products.map((product) => (
          <a href={`/product/${product.id}`}>
            <div className="product">
              <h4>{product.name}</h4>
              <p>{product.price}</p>
              <p>Categories: {product.categories}</p>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}

export default App;
