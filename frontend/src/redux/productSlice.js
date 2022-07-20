import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    // sample inventory
    itemInventory: [],
    showWarning: false,
    pending: false,
    error: false,
  },

  reducers: {
    VALIDATE_START: state => {
      state.pending = true;
    },
    VALIDATE_SUCCESS: state => {
      state.pending = false;
      state.error = false;
    },
    VALIDATE_ERROR: state => {
      state.error = true;
      state.pending = false;
    },

    // add newly created item to inventory
    ADD_FETCHED_ITEMS_TO_INVENTORY: (state, action) => {
      state.itemInventory = [...action.payload];
    },

    // used for the drag and drop of items,
    ADD_ITEM_TO_COLUMN: (state, action) => {
      let updatedItem = state.itemInventory.filter(
        item => item.id === action.payload.id
      );
      updatedItem[0].column_name = action.payload.title;
      state.itemInventory = [...state.itemInventory, { ...updatedItem }];
    },

    // will delete the item from the Products-Online Column
    DELETE_ITEM_FROM_COLUMN: (state, action) => {
      state.itemsOnline = [
        ...state.itemsOnline.filter(item => item.id !== action.payload),
      ];
      state.showWarning = false;
    },

    TOGGLE_WARNING_MESSAGE: state => {
      state.showWarning = !state.showWarning;
    },
  },
});

export const {
  ADD_ITEM_TO_COLUMN,
  DELETE_ITEM_FROM_COLUMN,
  TOGGLE_WARNING_MESSAGE,
  VALIDATE_START,
  VALIDATE_SUCCESS,
  VALIDATE_ERROR,
  ADD_FETCHED_ITEMS_TO_INVENTORY,
} = productSlice.actions;
export default productSlice.reducer;
