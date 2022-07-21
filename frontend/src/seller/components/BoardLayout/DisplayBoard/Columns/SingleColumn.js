import React from "react";
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { updateSingleItem } from "../../../../../redux/productApiCalls";
import { ADD_ITEM_TO_COLUMN } from "../../../../../redux/productSlice";
import {
  Columns,
  Grid,
  StyledColumnContainer,
} from "../../../../styles/SellerColumns";
import SingleItem from "../Items/SingleItem";
import DeleteColumn from "../Items/DeleteColumn";
import { TOGGLE_WARNING_MESSAGE } from "../../../../../redux/columnSlice";
import SearchBar from "../Items/SearchBar";
import { TiDelete } from "react-icons/ti";

const SingleColumn = ({ title, id }) => {
  const dispatch = useDispatch();
  const { showWarning } = useSelector(store => store.columns);
  const { itemInventory, searchedItems } = useSelector(store => store.product);

  // function that handles the drop feature of drag-and-drop
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "productItem",
    drop: item => {
      addDraggedItemToColumn(item.id);
      updateSingleItem(item.id, title, dispatch);
    },

    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  // FUNCTION THAT HANDLES THE ITEMS TO BE ADDED INTO THE Products-Online STATE ARRAY
  const addDraggedItemToColumn = draggedItemId => {
    // get a reference to the item being dragged by the user
    const draggedItem = itemInventory.filter(item => draggedItemId === item.id);

    // check if item exists in the array, if no don't add it else add the item
    const checkIndex = itemInventory.findIndex(
      item => item.id === draggedItem[0].id
    );
    dispatch(ADD_ITEM_TO_COLUMN({ id: draggedItemId, title: title }));
    if (checkIndex === -1) {
    } else {
      return;
    }
  };

  return (
    <>
      <StyledColumnContainer>
        {/* <StyledDeleteBtn onClick={() => dispatch(TOGGLE_WARNING_MESSAGE())}>
          <TiDelete size={25} color="#EA5555" />
        </StyledDeleteBtn> */}
        <Columns ref={drop}>
          <h4>{title}</h4>
          <SearchBar columnId={id} columnTitle={title} />
          <Grid>
            {itemInventory
              .filter(item => item.column_name === title)
              .map(item => (
                <SingleItem key={item.id} {...item} />
              ))}
          </Grid>
        </Columns>
      </StyledColumnContainer>
      {showWarning && <DeleteColumn columnId={id} />}
    </>
  );
};

export default SingleColumn;
