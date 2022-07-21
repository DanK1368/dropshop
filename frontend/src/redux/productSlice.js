import { createSlice } from "@reduxjs/toolkit";
import HeadphonesPage from "../buyer/pages/HeadphonesPage";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    // sample inventory
    itemInventory: [
      {
        id: 1,
        name: "Headphones PX5000",
        price: 300,
        stock: 3,
        amount: 1,
      },
      {
        id: 2,
        name: "Speakers PX5000",
        price: 100,
        stock: 1,
        amount: 1,
      },
      {
        id: 3,
        name: "Earphones PX5000",
        price: 450,
        stock: 7,
        amount: 1,
      },
    ],
    itemsOnline: [],
    dummyInventory [
      id: 1,
      category: {
        id: 1,
        name: Headphones,
      },
      description: "asd",
      features: "asda",
      box_items: "1",
      
    ],
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

    // used for the drag and drop of items from the inventory to another column
    ADD_ITEM_TO_COLUMN: (state, action) => {
      state.itemsOnline = [
        ...state.itemsOnline.filter(item => item.id !== action.payload[0].id),
        action.payload[0],
      ];
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
} = productSlice.actions;
export default productSlice.reducer;
