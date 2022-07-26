import axios from "axios";
import {
  VALIDATE_START,
  VALIDATE_SUCCESS,
  VALIDATE_ERROR,
} from "./productSlice";
import {
  ADD_COLUMN,
  UPDATE_COLUMNS,
  DELETE_COLUMN,
  TOGGLE_WARNING_MESSAGE,
} from "./columnSlice";
import { toast } from "react-toastify";

// const BASE_URL = "http://127.0.0.1:8000/backend/";
const BASE_URL = "https://dropshop.propulsion-learn.ch/backend/"



const BEARER_TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU4NzQ2NTY1LCJpYXQiOjE2NTgzMTQ1NjUsImp0aSI6IjE3NjYyMjllZGVlYjRlNDdiZmYyODQxZjM4YmJiMDljIiwidXNlcl9pZCI6MX0.LraGGEluEC7Qb4v405g0o37-ZxRA0G_fcwYY1IS4-bY";

// create new columns
export const createNewColumn = async ({ title }, dispatch) => {
  dispatch(VALIDATE_START);

  try {
    const response = await axios.post(
      `${BASE_URL}api/columns/`,
      {
        title,
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
    if (response.status === 201) {
      dispatch(ADD_COLUMN(response.data));
      toast.success("New column created");
    } else {
      return;
    }
  } catch (error) {
    dispatch(VALIDATE_ERROR());
    console.log(error);
  }
};

//list all the columns
export const listAllColumns = async dispatch => {
  dispatch(VALIDATE_START());

  try {
    const response = await axios.get(`${BASE_URL}api/columns/`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("authToken")
        )}`,
      },
    });
    dispatch(VALIDATE_SUCCESS());
    if (response.status === 200) {
      dispatch(UPDATE_COLUMNS(response.data));
    } else {
      return;
    }
  } catch (error) {
    dispatch(VALIDATE_ERROR());
    console.log(error);
  }
};

// delete a single column
export const deleteSingleColumn = async (id, dispatch) => {
  dispatch(VALIDATE_START());

  try {
    const response = await axios.delete(`${BASE_URL}api/columns/${id}`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("authToken")
        )}`,
      },
    });
    dispatch(VALIDATE_SUCCESS());
    if (response.status === 204) {
      dispatch(DELETE_COLUMN(id));
      dispatch(TOGGLE_WARNING_MESSAGE());
      toast.success("Successfully deleted column");
    } else {
      return;
    }
  } catch (error) {
    dispatch(VALIDATE_ERROR());
    toast.error("Oops! Something went wrong");
  }
};
