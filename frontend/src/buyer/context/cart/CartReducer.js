const cartReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_CART_SUMMARY":
      return {
        ...state,
        showCartSummary: !state.showCartSummary,
      };

    default:
      return state;
  }
};

export default cartReducer;
