import { createContext, useReducer } from "react";
import productReducer from "./ProductReducer";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  // dummy product list
  const initialState = {
    productInventory: [
      {
        id: 1,
        name: "Headphones PX5000",
        price: 300,
        stock: 3,
      },
      {
        id: 2,
        name: "Speakers PX5000",
        price: 100,
        stock: 1,
      },
      {
        id: 3,
        name: "Earphones PX5000",
        price: 450,
        stock: 7,
      },
    ],
    productsOnline: [],
  };

  const [state, dispatch] = useReducer(productReducer, initialState);

  return (
    <ProductContext.Provider
      value={{
        productInventory: state.productInventory,
        productsOnline: state.productsOnline,
        dispatch,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
