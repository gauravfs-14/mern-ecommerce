import axios from "axios";
import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_SUCCESS":
      return { ...state, product: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
function Product() {
  const params = useParams();
  const { slug } = params;
  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    product: {},
    loading: true,
    error: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get(`/api/products/${slug}`);
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (error) {
        dispatch({ type: "FETCH_FAIL", payload: error.message });
      }
    };
    fetchData();
  }, [slug]);
  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error.message}</div>
  ) : (
    <div className="product_div">
      <Helmet>
        <title>{product.name}</title>
      </Helmet>
      <div className="image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="details">
        <h4>{product.name}</h4>
        <p>Rating: {product.rating}</p>
        <p>{product.price}</p>
        <p>Categories: {product.categories}</p>
        {product.stock_count !== 0 ? (
          <button className="in-stock">In Stock</button>
        ) : (
          <button>Out Stock</button>
        )}
        {product.stock_count !== 0 ? <button>Add to Cart</button> : null}
      </div>
    </div>
  );
}

export default Product;
