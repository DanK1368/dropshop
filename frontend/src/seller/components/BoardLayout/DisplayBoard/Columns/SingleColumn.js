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
    drop: item => addDraggedItemToColumn(item.id),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  // FUNCTION THAT HANDLES THE ITEMS TO BE ADDED INTO THE Products-Online STATE ARRAY
  const addDraggedItemToColumn = draggedItemId => {
    // get a reference to the item being dragged by the user
    const draggedItem = array.filter(item => draggedItemId === item.id);

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

  const array = [
    {
      id: 7,
      name: "headphones",
      description: "whatever",
      features: "loud",
      box_items: "5",
      stock: 2,
      price: 200.0,
      image: null,
      video: null,
      category: 1,
      seller_profile: 1,
      column: "Inventory",
    },
    {
      id: 5,
      name: "headphones",
      description: "whatever",
      features: "loud",
      box_items: "5",
      stock: 2,
      price: 200.0,
      image: null,
      video: null,
      category: 1,
      seller_profile: 1,
      column: "Inventory",
    },
    {
      id: 8,
      name: "headphones",
      description: "whatever",
      features: "loud",
      box_items: "5",
      stock: 2,
      price: 200.0,
      image: null,
      video: null,
      category: 1,
      seller_profile: 1,
      column: "DISCOUNT",
    },
  ];

  return (
    <Columns ref={drop}>
      <h4>{title}</h4>
      <Grid>
        {array
          .filter(item => item.column === title)
          .map(item => (
            <SingleItem key={item.id} id={item.id} />
          ))}
      </Grid>
    </Columns>
  );
};

export default SingleColumn;
