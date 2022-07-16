import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="product">
      <Link to={`/product/${product.id}`} key={product.id}>
        <div className="imgDiv">
          <img src={product.image} alt={product.name} />
        </div>
        <h4>{product.name}</h4>
      </Link>
      <p>Rating: {product.rating}</p>
      <p>{product.price}</p>
      <p>Categories: {product.categories}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
