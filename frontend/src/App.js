import React from "react";
import { Routes, Route } from "react-router-dom";
import SellerPage from "./seller/pages/SellerPage";
import ProductDetails from "./buyer/pages/ProductDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SellerPage />} />
        <Route path="productdetails" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
