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
  status: null,

  reducers: {
    UPDATE_USER_INFO: (state, action) => {
      console.log(action.payload);
      state.userInfo = { ...action.payload };
      toast.success("Profile successfully updated");
    },

    // this will handle the user registration request
    UPDATE_START: state => {
      state.pending = true;
    },
    UPDATE_SUCCESS: (state, action) => {
      state.pending = false;
      state.error = false;
      state.status = action.payload;
      toast.success("Success! Please check your email");
    },
    UPDATE_ERROR: (state, action) => {
      state.error = true;
      state.pending = false;
      state.status = action.payload;
      toast.error("Oops! Something went wrong");
    },
  },
});

export const { UPDATE_USER_INFO, UPDATE_START, UPDATE_SUCCESS, UPDATE_ERROR } =
  userSlice.actions;
export default userSlice.reducer;
