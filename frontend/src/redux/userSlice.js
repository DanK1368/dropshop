import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
      first_name: "Daniel",
      last_name: "Kött",
      email: "daniel@gmail.com",
      phone: "077 123 45 67",
      address: "My Street 27",
      zip: "8834",
      city: "Schindellegi",
      country: "Switzerland",
    },
  },
  pending: false,
  error: false,

  reducers: {
    UPDATE_USER_INFO: (state, action) => {
      console.log(action.payload);
      state.userInfo = { ...action.payload };
    },

    // this will handle the user registration request
    REGISTER_START: state => {
      state.pending = true;
    },
    REGISTER_SUCCESS: state => {
      state.pending = false;
      state.error = false;
    },
    REGISTER_ERROR: state => {
      state.error = true;
      state.pending = false;
    },

    // this will handle the validation of the user
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
  },
});

export const {
  UPDATE_USER_INFO,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  VALIDATE_START,
  VALIDATE_SUCCESS,
  VALIDATE_ERROR,
} = userSlice.actions;
export default userSlice.reducer;
