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
import Login from "./buyer/pages/Login";
import Validate from "./buyer/pages/Validate";
import Registration from "./buyer/pages/Registration";
import Layout from "./buyer/pages/Layout";
import Checkout from "./buyer/pages/Checkout";
import Profile from "./buyer/pages/Profile";

function App() {
  return (
    <div>
      <Routes>
        {/* Seller Side Below  */}
        <Route path="seller" element={<SellerPage />} />
        {/* Buyer Side below  */}
        <Route path="/" element={<SharedLayout />}>
          <Route path="productdetails" element={<ProductDetails />} />
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          <Route path="validation" element={<Validate />} />
        </Route>
        <Route path="checkout" element={<Layout />}>
          <Route path="details" element={<Checkout />} />
        </Route>
        <Route path="user" element={<Layout />}>
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
