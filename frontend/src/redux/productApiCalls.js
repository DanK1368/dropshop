import axios from "axios";
import { toast } from "react-toastify";
import { listAllColumns } from "./columnApiCalls";
import {
  VALIDATE_START,
  VALIDATE_SUCCESS,
  VALIDATE_ERROR,
  ADD_FETCHED_ITEMS_TO_INVENTORY,
  DELETE_SINGLE_ITEM,
  TOGGLE_WARNING_MESSAGE,
  ADD_ITEM_TO_FEATURED_LIST,
  ADD_SINGLE_ITEM,
} from "./productSlice";

const BASE_URL = "http://127.0.0.1:8000/backend/";
// const BASE_URL = "https://dropshop.propulsion-learn.ch/backend/";

const BEARER_TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU4NzQ2NTY1LCJpYXQiOjE2NTgzMTQ1NjUsImp0aSI6IjE3NjYyMjllZGVlYjRlNDdiZmYyODQxZjM4YmJiMDljIiwidXNlcl9pZCI6MX0.LraGGEluEC7Qb4v405g0o37-ZxRA0G_fcwYY1IS4-bY";

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
    image,
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
        image,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("authToken")
          )}`,
        },
      }
    );
    dispatch(VALIDATE_SUCCESS());
    listAllColumns(dispatch);
  } catch (error) {
    console.log(error);
    dispatch(VALIDATE_ERROR());
  }
};

// list all the items
export const listAllItems = async dispatch => {
  dispatch(VALIDATE_START());

  try {
    const response = await axios.get(`${BASE_URL}api/items/`);
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
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("authToken")
          )}`,
        },
      }
    );
    dispatch(VALIDATE_SUCCESS());
    console.log(response);
  } catch (error) {
    dispatch(VALIDATE_ERROR());
    console.log(error);
  }
};

// delete a single item
export const deleteSingleItem = async (id, dispatch) => {
  dispatch(VALIDATE_START());

  try {
    const response = await axios.delete(`${BASE_URL}api/items/${id}/`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("authToken")
        )}`,
      },
    });

    if (response.status === 204) {
      dispatch(VALIDATE_SUCCESS());
      dispatch(DELETE_SINGLE_ITEM(id));
      dispatch(TOGGLE_WARNING_MESSAGE());
      toast.success("Item successfully deleted");
    } else {
      return;
    }
  } catch (error) {
    dispatch(VALIDATE_ERROR());
    toast.error("Oops! Something went wrong");
  }
};

// update a single item with all information
export const updateItem = async (
  id,
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
    const response = await axios.patch(
      `${BASE_URL}api/items/${id}/`,
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
      {
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("authToken")
          )}`,
        },
      }
    );
    if (response.status === 200) {
      dispatch(VALIDATE_SUCCESS());
      toast.success("Item successfully updated");
    } else {
      return;
    }
  } catch (error) {
    dispatch(VALIDATE_ERROR());
    toast.error("Oops! Something went wrong");
  }
};

// apply discount to single item
export const applyDiscountToItem = async (id, price, column_name, dispatch) => {
  dispatch(VALIDATE_START());

  try {
    const response = await axios.patch(
      `${BASE_URL}api/items/${id}/`,
      {
        price,
        column_name,
      },
      {
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("authToken")
          )}`,
        },
      }
    );
    if (response.status === 200) {
      dispatch(VALIDATE_SUCCESS());
      toast.success("Discount successfully applied");
    } else {
      return;
    }
  } catch (error) {
    dispatch(VALIDATE_ERROR());
    toast.error("Oops! Something went wrong");
  }
};

// fetch a single item ( featured item )
export const fetchFeaturedItem = async (id, dispatch) => {
  dispatch(VALIDATE_START());

  try {
    const response = await axios.get(`${BASE_URL}api/items/${id}`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("authToken")
        )}`,
      },
    });
    dispatch(VALIDATE_SUCCESS());
    dispatch(ADD_ITEM_TO_FEATURED_LIST(response.data));
  } catch (error) {
    console.log(error);
  }
};

// retrieve a single item

export const fetchSingleItem = async (id, dispatch) => {
  dispatch(VALIDATE_START());

  try {
    const response = await axios.get(`${BASE_URL}api/items/${id}`);
    dispatch(VALIDATE_SUCCESS());
    dispatch(ADD_SINGLE_ITEM(response.data));
  } catch (error) {
    console.log(error);
  }
};
