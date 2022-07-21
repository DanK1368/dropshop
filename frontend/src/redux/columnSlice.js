import { createSlice } from "@reduxjs/toolkit";

export const columnSlice = createSlice({
  name: "columns",
  initialState: {
    columns: [],
    showWarning: false,
  },

  reducers: {
    ADD_COLUMN: (state, action) => {
      state.columns = [...state.columns, action.payload];
    },

    UPDATE_COLUMNS: (state, action) => {
      state.columns = action.payload;
    },

    DELETE_COLUMN: (state, action) => {
      state.columns = [
        ...state.columns.filter(column => column.id !== action.payload),
      ];
    },

    TOGGLE_WARNING_MESSAGE: state => {
      state.showWarning = !state.showWarning;
    },
  },
});

export const {
  ADD_COLUMN,
  UPDATE_COLUMNS,
  TOGGLE_WARNING_MESSAGE,
  DELETE_COLUMN,
} = columnSlice.actions;
export default columnSlice.reducer;
