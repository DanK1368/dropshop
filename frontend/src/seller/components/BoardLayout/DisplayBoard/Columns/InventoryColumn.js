import React, { useState } from "react";
import { Columns, Grid } from "../../../../styles/SellerColumns";
import SingleItem from "../Items/SingleItem";
import { useDrop } from "react-dnd";
import { useContext } from "react";
import productContext from "../../../../context/products/ProductContext";

const InventoryColumn = () => {
  // state used to toggle the delete button for the SingleItem component
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  const { productInventory, productsOnline, dispatch } =
    useContext(productContext);

  // function that handles
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "productItem",
    drop: item => addDraggedItemToProductsOnline(item.id),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  // FUNCTION THAT HANDLES THE ITEMS TO BE ADDED INTO THE BOARD STATE ARRAY
  const addDraggedItemToProductsOnline = itemId => {
    // get a reference to the item being dragged by the user
    const draggedItem = productInventory.filter(item => itemId === item.id);

    const checkIndex = productsOnline.findIndex(
      item => item.id === draggedItem[0].id
    );

    // check if item exists in the array, if no don't add it else add the item
    if (checkIndex === -1) {
      dispatch({ type: "ADD_TO_PRODUCTS_ONLINE", payload: draggedItem });
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
          {productInventory.map(item => (
            <SingleItem key={item.id} {...item} />
          ))}
        </Grid>
      </Columns>

      {/* ITEMS TO BE SOLD ONLINE */}
      <Columns ref={drop}>
        <h4>For Sale Online</h4>
        <Grid>
          {productsOnline.map(item => (
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
          {board.map(item => (
            <SingleItem key={item.id} {...item} />
          ))}
        </Grid>
      </Columns> */}
    </>
  );
};

export default InventoryColumn;
