import {
  REGISTER_START,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
  VALIDATE_START,
  VALIDATE_SUCCESS,
  VALIDATE_ERROR,
  UPDATE_USER_STATUS,
  GET_USER_INFO,
} from "./userSlice";
import axios from "axios";
import { toast } from "react-toastify";

const BASE_URL = "http://127.0.0.1:8000/backend/";
// const BASE_URL = "https://dropshop.propulsion-learn.ch/backend/";

const BEARER_TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU5MDg0NTU3LCJpYXQiOjE2NTg2NTI1NTcsImp0aSI6ImFjMDVmMmVkMDUzNDQ2YTM4ZWIwZGZjOGVhZTAwNDJkIiwidXNlcl9pZCI6Mn0.oBSdY5KcVCrBGd9GjI9BYXVcgAfooIGXH1L8zIKSys8";

// Registration of new user
export const registerUser = async (
  { email, username, password },
  dispatch,
  navigate
) => {
  dispatch(REGISTER_START());

  try {
    const response = await axios.post(`${BASE_URL}api/registration/`, {
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
    const response = await axios.post(
      `${BASE_URL}api/registration/validation/`,
      {
        email: email,
        validation_code: validation_code,
      }
    );
    dispatch(VALIDATE_SUCCESS());
    if (response.status === 200) {
      toast.success(
        `Validation successfull! You may now login to your account`
      );
      navigate("/login");
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

// login user
export const loginUser = async ({ username, password }, dispatch, navigate) => {
  dispatch(VALIDATE_START());

  try {
    const response = await axios.post(`${BASE_URL}token/`, {
      username,
      password,
    });
    dispatch(VALIDATE_SUCCESS());
    if (response.status === 200) {
      dispatch(UPDATE_USER_STATUS());
      localStorage.setItem("authToken", JSON.stringify(response.data.access));
      toast.success(`Logged in successfully!`);
      navigate("/user/profile");
    } else {
      return;
    }
  } catch (error) {
    if (error.response) {
      if (error.response.status === 401) {
        dispatch(VALIDATE_ERROR());
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
};

// update user profile information
export const updateUserProfile = async (
  { first_name, last_name, phone_number, street, zip, city, country },
  dispatch
) => {
  dispatch(VALIDATE_START());

  try {
    const response = await axios.patch(
      `${BASE_URL}api/user/me/buyer/`,
      {
        first_name,
        last_name,
        phone_number,
        street,
        zip,
        city,
        country,
      },
      {
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("authToken")
          )}`,
        },
      }
    );
    dispatch(VALIDATE_SUCCESS());
    console.log(response.data);
    if (response.status === 200) {
      toast.success(`Profile updated successfully!`);
    } else {
      return;
    }
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong. Unable to save profile");
  }
};

// get user profile information
export const getUserProfile = async (navigate, dispatch) => {
  dispatch(VALIDATE_START());

  try {
    const response = await axios.get(`${BASE_URL}api/user/me/buyer/`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("authToken")
        )}`,
      },
    });

    if (response.status === 200) {
      dispatch(VALIDATE_SUCCESS());
      dispatch(GET_USER_INFO(response.data));
      navigate("/user/profile");
    } else {
      return;
    }
  } catch (error) {
    dispatch(VALIDATE_ERROR());
    console.log(error);
  }
};
