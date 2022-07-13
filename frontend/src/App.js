import React from "react";
import { Routes, Route } from "react-router-dom";
import BottomPicture from "./buyer/components/BottomPicture";
import ItemForSale from "./buyer/components/ItemForSale";
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
