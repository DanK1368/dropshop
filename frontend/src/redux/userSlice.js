import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
      first_name: "",
      last_name: "",
      email: "daniel@gmail.com",
      phone_number: "",
      street: "",
      zip: "",
      city: "",
      country: "",
    },
    favorite_items: [],
    pending: false,
    error: false,
    isAuthenticatedUser: false,
    authToken: null,
  },

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

    // this will handle the login of the user
    UPDATE_USER_STATUS: state => {
      state.isAuthenticatedUser = !state.isAuthenticatedUser;
    },

    // this will update user information state with the data fetched from the DB
    GET_USER_INFO: (state, action) => {
      state.userInfo = { ...action.payload };
    },

    // see if local storage has access token stored, if yes update state
    SET_AUTH_TOKEN: state => {
      if (localStorage.getItem("authToken")) {
        state.authToken = localStorage.getItem("authToken");
        state.isAuthenticatedUser = true;
      } else {
        state.authToken = null;
        state.isAuthenticatedUser = false;
      }
    },

    // clear authtoken in localstorage and logout user
    LOGOUT_USER: state => {
      state.isAuthenticatedUser = false;
      localStorage.removeItem("authToken");
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
  UPDATE_USER_STATUS,
  GET_USER_INFO,
  SET_AUTH_TOKEN,
  LOGOUT_USER,
} = userSlice.actions;
export default userSlice.reducer;
