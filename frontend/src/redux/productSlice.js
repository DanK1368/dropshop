import { createSlice } from "@reduxjs/toolkit";
import HeadphonesPage from "../buyer/pages/HeadphonesPage";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    // sample inventory
    itemInventory: [],
    searchedItems: [],
    featuredItems: [],
    dummyInventory: [
      {
        id: 1,
        category: {
          id: 1,
          name: "headphones",
        },
        description: "asd",
        features: "asda",
        box_items: "1",
        stock: 1,
        price: 100.0,
        image: null,
        video: null,
        seller_profile: 1,
      },
    ],
    showWarning: false,
    pending: false,
    error: false,
    showItemDetails: false,
    itemToBeUpdatedId: null,
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
    DELETE_SINGLE_ITEM: (state, action) => {
      state.itemInventory = [
        ...state.itemInventory.filter(item => item.id !== action.payload),
      ];
    },

    TOGGLE_WARNING_MESSAGE: state => {
      state.showWarning = !state.showWarning;
    },

    TOGGLE_SHOW_ITEM_DETAILS: (state, action) => {
      state.showItemDetails = !state.showItemDetails;
      state.itemToBeUpdatedId = action.payload;
    },

    SEARCH_ITEMS: (state, action) => {
      state.searchedItems = state.itemInventory.filter(
        item =>
          item.name.toLocaleLowerCase().includes(action.payload.searchTerm) &&
          item.column_name === action.payload.columnTitle
      );
    },

    ADD_ITEM_TO_FEATURED_LIST: (state, action) => {
      state.featuredItems = [action.payload];
    },
  },
});

export const {
  ADD_ITEM_TO_COLUMN,
  DELETE_SINGLE_ITEM,
  TOGGLE_WARNING_MESSAGE,
  VALIDATE_START,
  VALIDATE_SUCCESS,
  VALIDATE_ERROR,
  ADD_FETCHED_ITEMS_TO_INVENTORY,
  TOGGLE_SHOW_ITEM_DETAILS,
  SEARCH_ITEMS,
  ADD_ITEM_TO_FEATURED_LIST,
} = productSlice.actions;
export default productSlice.reducer;
