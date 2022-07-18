import { UPDATE_START, UPDATE_ERROR, UPDATE_SUCCESS } from "./userSlice";
import axios from "axios";
import { toast } from "react-toastify";

export const registerUser = async (email, dispatch) => {
  dispatch(UPDATE_START());

  try {
    const response = await axios.post(
      "http://localhost:8000/backend/api/auth/registration/",
      {
        email: email,
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
