import { createContext, useReducer } from "react";
import cartReducer from "./CartReducer";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const initialState = {
    showCartSummary: false,
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider
      value={{
        showCartSummary: state.showCartSummary,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
