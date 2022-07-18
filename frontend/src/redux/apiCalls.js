import {
  REGISTER_START,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
  VALIDATE_START,
  VALIDATE_SUCCESS,
  VALIDATE_ERROR,
} from "./userSlice";
import axios from "axios";
import { toast } from "react-toastify";

const BASE_URL = "http://127.0.0.1:8000/backend/api/";

// Registration of new user
export const registerUser = async (
  { email, username, password },
  dispatch,
  navigate
) => {
  dispatch(REGISTER_START());

  try {
    const response = await axios.post(`${BASE_URL}registration/`, {
      email: email,
      username: username,
      password: password,
    });
    dispatch(REGISTER_SUCCESS());
    if (response.status === 201) {
      toast.success("Registered successfully! Please check your email");
      navigate("/validation");
    } else {
      return;
    }
  } catch (error) {
    dispatch(REGISTER_ERROR(error.response.status));

    if (error.response) {
      if (error.response.status === 400) {
        toast.error(`${Object.values(error.response.data)}`);
      } else {
        toast.error(
          "We are facing some problems. Please try registering later."
        );
      }
    } else if (error.request) {
      toast.error(
        "We are facing some problems. Please try registering some time later."
      );
    }
  }
  toast.promise(registerUser, {
    pending: "Loading....",
  });
};

// Validation of user
export const validateUser = async (
  { email, validation_code },
  dispatch,
  navigate
) => {
  dispatch(VALIDATE_START());

  try {
    const response = await axios.post(`${BASE_URL}registration/validation/`, {
      email: email,
      validation_code: validation_code,
    });
    dispatch(VALIDATE_SUCCESS());
    if (response.status === 200) {
      toast.success(
        `Your account has been successfully validated. Enjoy Shopping!`
      );
      navigate("/");
    } else {
      return;
    }
  } catch (error) {
    dispatch(VALIDATE_ERROR(error.response.status));

    if (error.response) {
      if (
        error.response.status === 400 &&
        error.response.data === "Wrong validation code"
      ) {
        toast.error("Wrong validation code");
      } else {
        toast.error(
          "We are facing some problems. Please try registering later."
        );
      }
    } else if (error.request) {
      toast.error(
        "We are facing some problems. Please try registering some time later."
      );
    }
  }

  toast.promise(validateUser, {
    pending: "Loading...",
  });
};
