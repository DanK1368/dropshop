import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    showCartModal: false,
    cart: [],
    amount: 0, // displays number of unique items in the cart
    total: 0, // total price of all the items added together
    amountOfItems: 1,
  },

  reducers: {
    TOGGLE_CART_MODAL: state => {
      state.showCartModal = !state.showCartModal;
    },

    ADD_TO_CART: (state, action) => {
      // check first if item exist in the cart already
      const checkIndex = state.cart.findIndex(
        item => item.id === action.payload.id
      );
      if (checkIndex !== -1) {
        // if exist, we need to crate a key in the obj. called amount and increase it by 1
        // since the obj, does not have such key by default
        state.cart[checkIndex].amount = state.amountOfItems;
        state.cart[checkIndex].amount++;
        toast.success(
          `Added ${state.amountOfItems} more ${action.payload.name} to your cart...`
        );
        // reset amount of items in the product details page to 1, after adding it to the cart
        state.amountOfItems = 1;
      } else {
        // if non-existent, push the item into the cart, and add a key named amount and set it to 1
        state.cart = [
          ...state.cart,
          { ...action.payload, amount: state.amountOfItems },
        ];
        toast.success(
          ` ${state.amountOfItems} ${action.payload.name} added to your cart`
        );

        // reset amount of items in the product details page to 1, after adding it to the cart
        state.amountOfItems = 1;
      }
    },

    // increases the number of a specific product in the cart
    INCREASE: (state, action) => {
      const cartItem = state.cart.find(item => item.id === action.payload);
      cartItem.amount++;
    },

    // decreases the number of a specific product in the cart
    DECREASE: (state, action) => {
      const cartItem = state.cart.find(item => item.id === action.payload);
      cartItem.amount--;
    },

    // clears the entire cart of all items
    REMOVE_ALL_ITEMS: state => {
      state.cart = [];
      // toast.info("All items removed from your cart");
    },

    // removes just 1 item --> is triggered when number of items goes below zero
    REMOVE_SINGLE_ITEM: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload);
      toast.info("Item removed from your cart");
    },

    // calculates number of specific items in cart + total price of all items
    CALCULATE_TOTALS: state => {
      const { totalAmount, totalItems } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          cartTotal.totalAmount += amount;

          const itemTotal = price * amount;
          cartTotal.totalItems += itemTotal;

          return cartTotal;
        },
        { totalAmount: 0, totalItems: 0 }
      );

      state.amount = totalAmount;
      state.total = totalItems;
    },

    // increase number of items in the product details page
    INCREASE_AMOUNT_OF_ITEMS: state => {
      state.amountOfItems = state.amountOfItems + 1;
    },

    // decreases number of items in the product details page
    DECREASE_AMOUNT_OF_ITEMS: state => {
      state.amountOfItems = state.amountOfItems - 1;
    },
  },
});

export const {
  TOGGLE_CART_MODAL,
  ADD_TO_CART,
  CALCULATE_TOTALS,
  INCREASE,
  DECREASE,
  REMOVE_ALL_ITEMS,
  REMOVE_SINGLE_ITEM,
  INCREASE_AMOUNT_OF_ITEMS,
  DECREASE_AMOUNT_OF_ITEMS,
} = cartSlice.actions;
export default cartSlice.reducer;
