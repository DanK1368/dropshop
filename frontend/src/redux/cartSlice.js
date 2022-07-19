import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    showCartModal: false,
    cart: [],
    amount: 0,
    total: 0,
  },

  reducers: {
    TOGGLE_CART_MODAL: state => {
      state.showCartModal = !state.showCartModal;
    },

    ADD_TO_CART: (state, action) => {
      const checkIndex = state.cart.findIndex(
        item => item.id === action.payload.id
      );
      if (checkIndex !== -1) {
        state.cart[checkIndex].amount++;
      } else {
        state.cart = [...state.cart, action.payload];
      }
    },

    INCREASE: (state, action) => {
      const cartItem = state.cart.find(item => item.id === action.payload);
      cartItem.amount = cartItem.amount + 1;
    },
  },
});

export const { TOGGLE_CART_MODAL } = cartSlice.actions;
export default cartSlice.reducer;
