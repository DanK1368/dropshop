import React, { useState } from "react";
import { Columns, Grid } from "../../../../styles/SellerColumns";
import SingleItem from "../Items/SingleItem";
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { ADD_ITEM_TO_COLUMN, DELETE_ITEM_FROM_COLUMN } from "../../../../../redux/productSlice";

const InventoryColumn = () => {
  const { itemInventory, itemsOnline, items25 } = useSelector(state => state.product);
  const dispatch = useDispatch();

  // state used to toggle the delete button for the SingleItem component
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  // function that handles the drop feature of drag-and-drop
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "productItem",
    drop: item => addDraggedItemToProductsOnline(item.id),
    drop: item => addDraggedItemTo25Discount(item.id),
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
      console.log("item exist");
    }

    setShowDeleteButton(!showDeleteButton);
  };

  // FUNCTION THAT HANDLES THE ITEMS TO BE ADDED INTO THE 25% Discount STATE ARRAY
  const addDraggedItemTo25Discount = draggedItemId => {
    // get a reference to the item being dragged by the user
    const draggedItem = itemInventory.filter(item => draggedItem === item.id);

    //check if item exists in the array, if no don't add it else add the item
    const checkIndex = items25.findIndex(
      item => item.id === draggedItem[0].id
    );

    if (checkIndex === -1) {
      dispatch(ADD_ITEM_TO_COLUMN(draggedItem));
    } else {
      console.log("item exist");
    }

    setShowDeleteButton(!showDeleteButton);
  };

  return (
    <>
      {/* INVENTORY */}
      <Columns>
        <h4>Inventory</h4>
        <Grid>
          {itemInventory.map(item => (
            <SingleItem 
              key={item.id} 
              {...item}
            />
          ))}
        </Grid>
      </Columns>

      {/* ITEMS TO BE SOLD ONLINE */}
      <Columns ref={drop}>
        <h4>For Sale Online</h4>
        <Grid>
          {itemsOnline.map(item => (
            <SingleItem
              key={item.id}
              {...item}
              showDeleteButton={showDeleteButton}
            />
          ))}
        </Grid>
      </Columns>

      {/* ITEMS THAT HAVE A DISCOUNT
      <Columns ref={drop}>
        <h4>25% Discount</h4>
        <Grid>
          {items25.map(item => (
            <SingleItem key={item.id} 
            {...item} 
            showDeleteButton={showDeleteButton}
            />
          ))}
        </Grid>
      </Columns> */}
    </>
  );
};

export default InventoryColumn;
