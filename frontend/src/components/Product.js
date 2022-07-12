import React from "react";
import { useParams } from "react-router-dom";

function Product() {
  const params = useParams();
  const { slug } = params;
  console.log(slug);
  return <div>{slug}</div>;
}

export default Product;
