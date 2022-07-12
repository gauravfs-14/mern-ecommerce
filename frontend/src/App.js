import React from "react";
import "./style.css";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Home from "./components/Home";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:slug" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
