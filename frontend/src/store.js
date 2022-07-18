import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./redux/productSlice";
import cartReducer from "./redux/cartSlice";
import userReducer from "./redux/userSlice";

export default configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    user: userReducer,
  },
});
