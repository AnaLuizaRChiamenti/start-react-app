import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Products from "../pages/Products";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
