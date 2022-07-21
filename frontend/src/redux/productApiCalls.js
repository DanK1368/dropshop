import axios from "axios";
import { toast } from "react-toastify";
import {
  VALIDATE_START,
  VALIDATE_SUCCESS,
  VALIDATE_ERROR,
  ADD_FETCHED_ITEMS_TO_INVENTORY,
} from "./productSlice";

const BASE_URL = "http://127.0.0.1:8000/backend/";

const BEARER_TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU4Njc0MjcyLCJpYXQiOjE2NTgyNDIyNzIsImp0aSI6IjBjMDE5Y2EzOGQ1YjRmYmE4Y2YyMjQ0Y2M4N2I1NDg1IiwidXNlcl9pZCI6MX0.zmuLt8Ssf9O7oFuCvEN1lhTm7mMqqgXNKiyVmmKxDR0";

// create new item
export const createNewItem = async (
  {
    name,
    price,
    description,
    features,
    box_items,
    category,
    stock,
    column_name,
  },
  dispatch
) => {
  dispatch(VALIDATE_START());

  try {
    const response = await axios.post(
      `${BASE_URL}api/items/`,
      {
        name,
        stock,
        price,
        description,
        features,
        box_items,
        category,
        column_name,
      },
      {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
        },
      }
    );
    dispatch(VALIDATE_SUCCESS());
  } catch (error) {
    console.log(error);
    dispatch(VALIDATE_ERROR());
  }
};

// list all the items
export const listAllItems = async dispatch => {
  dispatch(VALIDATE_START());

  try {
    const response = await axios.get(`${BASE_URL}api/items/`, {
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    });
    dispatch(VALIDATE_SUCCESS());
    dispatch(ADD_FETCHED_ITEMS_TO_INVENTORY(response.data));
  } catch (error) {
    console.log(error);
  }
};

// update a single item
export const updateSingleItem = async (id, column_name, dispatch) => {
  dispatch(VALIDATE_START());

  try {
    const response = await axios.patch(
      `${BASE_URL}api/items/${id}/`,
      {
        column_name,
      },
      {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
        },
      }
    );
    dispatch(VALIDATE_SUCCESS());
  } catch (error) {
    dispatch(VALIDATE_ERROR());
    console.log(error);
  }
};
