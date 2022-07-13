import React from "react";
import { Routes, Route } from "react-router-dom";
import ItemForSale from "./buyer/components/ItemForSale";
import SellerPage from "./seller/pages/SellerPage";
import ProductDetails from "./buyer/pages/ProductDetails";

function App() {
  return (
    <div>
      <ItemForSale />
      {/**
      <Routes>
        <Route path="/" element={<SellerPage />} />
        <Route path="productdetails" element={<ProductDetails />} />
      </Routes>
       */}
    </div>
  );
}

export default App;
