import { createSlice } from "@reduxjs/toolkit";

export const columnSlice = createSlice({
  name: "columns",
  initialState: {
    columns: [],
  },

  reducers: {
    ADD_COLUMN: (state, action) => {
      state.columns = [...state.columns, action.payload];
    },

    UPDATE_COLUMNS: (state, action) => {
      state.columns = action.payload;
    },
  },
});

export const { ADD_COLUMN, UPDATE_COLUMNS } = columnSlice.actions;
export default columnSlice.reducer;
