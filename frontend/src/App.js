import React from "react";
import { Routes, Route } from "react-router-dom";
import BottomPicture from "./buyer/components/BottomPicture";
import ItemForSale from "./buyer/components/ItemForSale";
import ItemForSaleMirrored from "./buyer/components/ItemForSaleMirrored";
import ShopLinks from "./buyer/components/ShopLinks";
import SellerPage from "./seller/pages/SellerPage";
import Recomended from "./buyer/components/Recomended";
import ProductDetails from "./buyer/pages/ProductDetails";
import SharedLayout from "./buyer/pages/SharedLayout";
import Home from "./buyer/pages/Home";
import Login from "./buyer/pages/Login";
import Register from "./buyer/pages/Register";

function App() {
  return (
    <div>
      <Routes>
        {/* Seller Side Below  */}
        <Route path="seller" element={<SellerPage />} />
        {/* Buyer Side below  */}
        <Route path="/" element={<SharedLayout />}>
          <Route path="productdetails" element={<ProductDetails />} />
          <Route path="home/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
