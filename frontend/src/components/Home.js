import React from "react";
import { Link } from "react-router-dom";
import { products } from "../data";

function Home() {
  return (
    <>
      <div className="products-container">
        {products.map((product) => (
          <Link to={`/product/${product.id}`}>
            <div className="product">
              <h4>{product.name}</h4>
              <p>{product.price}</p>
              <p>Categories: {product.categories}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Home;
