import React from "react";
import { Routes, Route } from "react-router-dom";
import SellerPage from "./seller/pages/SellerPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SellerPage />} />
      </Routes>
    </div>
  );
}

export default App;
