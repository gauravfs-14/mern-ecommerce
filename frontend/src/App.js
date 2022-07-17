import React from "react";
import "./style.css";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Home from "./components/Home";
import { Route, Routes } from "react-router";
import { Helmet } from "react-helmet-async";

function App() {
  return (
    <>
      <Navbar />
      <Helmet>
        <title>ComputeNepal Shop</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:slug" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
