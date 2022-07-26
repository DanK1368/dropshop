import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import SellerPage from "./seller/pages/SellerPage";
import ProductDetails from "./buyer/pages/ProductDetails";
import SharedLayout from "./buyer/pages/SharedLayout";
import Home from "./buyer/pages/Home";
import Login from "./buyer/pages/Login";
import Validate from "./buyer/pages/Validate";
import Registration from "./buyer/pages/Registration";
import Layout from "./buyer/pages/Layout";
import Checkout from "./buyer/pages/Checkout";
import Profile from "./buyer/pages/Profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HeadphonesPage from "./buyer/pages/HeadphonesPage";
import SpeakersPage from "./buyer/pages/SpeakersPage";
import EarphonesPage from "./buyer/pages/EarphonesPage";
import Marketplace from "./buyer/pages/Marketplace";
import { useDispatch, useSelector } from "react-redux";
import { CALCULATE_TOTALS } from "./redux/cartSlice";
import { SET_AUTH_TOKEN } from "./redux/userSlice";
import { getUserProfile } from "./redux/apiCalls";
import CheckOutModal from "./buyer/components/CheckOutModal";
import ScrollToTop from "./buyer/components/ScrollToTop";

function App() {
  const { cart } = useSelector(store => store.cart);
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(CALCULATE_TOTALS());
  }, [cart, dispatch]);

  useEffect(() => {
    dispatch(SET_AUTH_TOKEN());
  }, []);

  useEffect(() => {
    getUserProfile(null, dispatch);
  }, []);

  return (
    <div>
      {/* Below component is for the notifications */}
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ScrollToTop />
      <Routes>
        {/* Seller Side Below  */}
        <Route path="seller" element={<SellerPage />} />
        {/* Buyer Side below  */}
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="marketplace" element={<Marketplace />} />
          <Route path="category-headphones" element={<HeadphonesPage />} />
          <Route path="category-speakers" element={<SpeakersPage />} />
          <Route path="category-earphones" element={<EarphonesPage />} />
          <Route
            path="productdetails/:productId"
            element={<ProductDetails />}
          />
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          <Route path="validation" element={<Validate />} />
        </Route>
        <Route path="checkout" element={<Layout />}>
          <Route path="details" element={<Checkout />} />
          <Route path="success" element={<CheckOutModal />} />
        </Route>
        <Route path="user" element={<Layout />}>
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
