import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="products-container">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
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
