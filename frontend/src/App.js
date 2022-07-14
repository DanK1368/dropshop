import React from "react";
import { Routes, Route } from "react-router-dom";
import BottomPicture from "./buyer/components/BottomPicture";
import ItemForSale from "./buyer/components/ItemForSale";
import SellerPage from "./seller/pages/SellerPage";
import Recomended from "./buyer/components/Recomended";
import ProductDetails from "./buyer/pages/ProductDetails";
import SharedLayout from "./buyer/pages/SharedLayout";

function App() {
  return (
    <div>
      {/* <ItemForSale /> */}
      <Routes>
        {/* Seller Side Below */}
        <Route path="seller" element={<SellerPage />} />
        {/* Buyer Side below */}
        <Route path="/" element={<SharedLayout />}>
          <Route path="productdetails" element={<ProductDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
