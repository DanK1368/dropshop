import axios from "axios";
import { toast } from "react-toastify";
import {
  VALIDATE_START,
  VALIDATE_SUCCESS,
  VALIDATE_ERROR,
} from "./productSlice";

const BASE_URL = "http://127.0.0.1:8000/backend/";

const BEARER_TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU4NjYzMTQ3LCJpYXQiOjE2NTgyMzExNDcsImp0aSI6ImViMzhlNDk3YzE2NzQ4NTk4YWM2MTVmY2M1ZjRkODBiIiwidXNlcl9pZCI6MX0.rn3BxjOf52c_5O0lJFPP2uR8h1uefKEL9ptBfOZ_Twk";

// create new item

export const createNewItem = async (
  { name, price, description, features, box_items, category, stock },
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
      },
      {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
        },
      }
    );
    dispatch(VALIDATE_SUCCESS());
    console.log(response);
  } catch (error) {
    console.log(error);
    dispatch(VALIDATE_ERROR());
  }
};
