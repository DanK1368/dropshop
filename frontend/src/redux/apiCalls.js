import { UPDATE_START, UPDATE_ERROR, UPDATE_SUCCESS } from "./userSlice";
import axios from "axios";
import { toast } from "react-toastify";

export const registerUser = async ({ email, username, password }, dispatch) => {
  dispatch(UPDATE_START());

  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/backend/api/registration/",
      {
        email: email,
        username: username,
        password: password,
      }
    );
    dispatch(UPDATE_SUCCESS(response.status));
  } catch (error) {
    dispatch(UPDATE_ERROR(error.response.status));
  }
  toast.promise(registerUser, {
    pending: "Loading....",
  });
};
