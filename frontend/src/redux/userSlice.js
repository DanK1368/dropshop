import { createSlice } from "@reduxjs/toolkit";

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

  reducers: {
    UPDATE_USER_INFO: (state, action) => {
      console.log(action.payload);
      state.userInfo = { ...action.payload };
    },
  },
});

export const { UPDATE_USER_INFO } = userSlice.actions;
export default userSlice.reducer;
