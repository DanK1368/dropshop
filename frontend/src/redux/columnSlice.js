import { createSlice } from "@reduxjs/toolkit";

export const columnSlice = createSlice({
  name: "columns",
  initialState: {
    columns: [
      {
        id: 1,
        title: "Inventory",
        items: [],
      },
      {
        id: 2,
        title: "Items to be sold online",
        items: [],
      },
    ],
  },

  reducers: {
    ADD_COLUMN: (state, action) => {
      state.columns = [...state.columns, action.payload];
    },
  },
});

export const { ADD_COLUMN } = columnSlice.actions;
export default columnSlice.reducer;
