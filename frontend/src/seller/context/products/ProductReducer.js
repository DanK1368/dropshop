const productReducer = (state, action) => {
  switch (action.type) {
    // used for the drag and drop of items from the inventory to another column
    case "ADD_TO_PRODUCTS_ONLINE":
      return {
        ...state,
        productsOnline: [
          ...state.productsOnline.filter(
            item => item.id !== action.payload[0].id
          ),
          action.payload[0],
        ],
      };
    // will delete the item from the Products-Online Column
    case "DELETE_FROM_COLUMN":
      return {
        ...state,
        productsOnline: [
          ...state.productsOnline.filter(item => item.id !== action.payload),
        ],
      };

    default:
      return state;
  }
};

export default productReducer;
