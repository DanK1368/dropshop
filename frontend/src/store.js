import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./redux/productSlice";
import cartReducer from "./redux/cartSlice";
import userReducer from "./redux/userSlice";
import columnReducer from "./redux/columnSlice";
import wishListReducer from "./redux/wishlistSlice";

export default configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    user: userReducer,
    columns: columnReducer,
    wishlist: wishListReducer,
  },
});
