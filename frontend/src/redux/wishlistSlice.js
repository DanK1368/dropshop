import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const wishSlice = createSlice({
  name: "wishlist",
  initialState: {
    showwishlistModal: false,
    wishlist: [], 
    quantity: 0,
    quantityOfItems: 1,
  },

  reducers: {
    TOGGLE_WISHLIST_MODAL: state => {
      state.showwishlistModal = !state.showwishlistModal;
    },

    ADD_TO_WISHLIST: (state, action) => {
      // check first if item exist in the list already
      const checkIndex = state.wishlist.findIndex(
        item => item.id === action.payload.id
      );
      if (checkIndex !== -1) {
        // if exist, we need to crate a key in the obj. called amount and increase it by 1
        // since the obj, does not have such key by default
        state.wishlist[checkIndex].quantity = state.quantityOfItems;
        state.wishlist[checkIndex].quantity++;
        toast.success(
          `Added ${state.quantityOfItems} more ${action.payload.name} to your wishlist...`
        );
        // reset amount of items in the product details page to 1, after adding it to the list
        state.quantityOfItems = 1;
      } else {
        // if non-existent, push the item into the list, and add a key named amount and set it to 1
        state.wishlist = [
          ...state.wishlist,
          { ...action.payload, amount: state.quantityOfItems },
        ];
        toast.success(
          ` ${state.quantityOfItems} ${action.payload.name} added to your wishlist`
        );

        // reset amount of items in the product details page to 1, after adding it to the wishlist
        state.quantityOfItems = 1;
      }
    },

    // clears the entire cart of all items
    REMOVE_ALL_ITEMS: state => {
      state.wishlist = [];
      //toast.info("All items removed from your wishlist");
    },

    // removes just 1 item --> is triggered when number of items goes below zero
    REMOVE_SINGLE_ITEM: (state, action) => {
      state.wishlist = state.wishlist.filter(item => item.id !== action.payload);
      toast.info("Item removed from your wishlist");
    },
    
  },
});

export const {
  TOGGLE_WISHLIST_MODAL,
  ADD_TO_WISHLIST,
  REMOVE_ALL_ITEMS,
  REMOVE_SINGLE_ITEM,
} = wishSlice.actions;
export default wishSlice.reducer;
