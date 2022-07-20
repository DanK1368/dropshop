import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { ADD_ITEM_TO_COLUMN } from "../../../../../redux/productSlice";
import { Columns, Grid } from "../../../../styles/SellerColumns";
import SingleItem from "../Items/SingleItem";

const SingleColumn = ({ title }) => {
  const dispatch = useDispatch();
  const { itemInventory, itemsOnline } = useSelector(state => state.product);
  // state used to toggle the delete button for the SingleItem component
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  // function that handles the drop feature of drag-and-drop
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "productItem",
    drop: item => addDraggedItemToProductsOnline(item.id),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  // FUNCTION THAT HANDLES THE ITEMS TO BE ADDED INTO THE Products-Online STATE ARRAY
  const addDraggedItemToProductsOnline = draggedItemId => {
    // get a reference to the item being dragged by the user
    const draggedItem = itemInventory.filter(item => draggedItemId === item.id);
    // check if item exists in the array, if no don't add it else add the item
    const checkIndex = itemsOnline.findIndex(
      item => item.id === draggedItem[0].id
    );

    if (checkIndex === -1) {
      dispatch(ADD_ITEM_TO_COLUMN(draggedItem));
    } else {
      return;
    }

    setShowDeleteButton(!showDeleteButton);
  };

  return (
    <Columns ref={drop}>
      <h4>{title}</h4>
      <Grid></Grid>
    </Columns>
  );
};

export default SingleColumn;
