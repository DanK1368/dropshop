import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    showCartModal: false,
  },

  reducers: {
    TOGGLE_CART_MODAL: state => {
      state.showCartModal = !state.showCartModal;
    },
  },
});

export const { TOGGLE_CART_MODAL } = cartSlice.actions;
export default cartSlice.reducer;
