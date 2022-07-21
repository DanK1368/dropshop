import {
  StyledBtnContainer,
  StyledCard,
  StyledCardContainer,
  StyledDeleteBtn,
} from "../../../../styles/SingleItem";
import { useDrag } from "react-dnd";
import { TiDelete } from "react-icons/ti";
import DeleteItem from "../../../../components/BoardLayout/DisplayBoard/Items/DeleteItem";
import { useDispatch, useSelector } from "react-redux";
import {
  TOGGLE_SHOW_ITEM_DETAILS,
  TOGGLE_WARNING_MESSAGE,
} from "../../../../../redux/productSlice";
import ItemDetails from "./ItemDetails";
import { useState } from "react";

const SingleItem = ({ id, name, price, stock, image }) => {
  const { showWarning, showItemDetails, itemInventory } = useSelector(
    state => state.product
  );
  const dispatch = useDispatch();

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "productItem",
    item: {
      id: id,
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <>
      <StyledCardContainer>
        <StyledCard ref={drag}>
          <StyledDeleteBtn onClick={() => dispatch(TOGGLE_WARNING_MESSAGE())}>
            <TiDelete size={25} color="#EA5555" />
          </StyledDeleteBtn>
          <div>
            <img src={image} alt="" />
          </div>
          <h2>{name}</h2>
          <div>
            <p>Price: $ {price}</p>
            <p>Stock: {stock} </p>
          </div>

          <StyledBtnContainer>
            <button onClick={() => dispatch(TOGGLE_SHOW_ITEM_DETAILS(id))}>
              See Details
            </button>
            <button>Make Item Featured</button>
          </StyledBtnContainer>
        </StyledCard>
      </StyledCardContainer>
      {showWarning && <DeleteItem productId={id} />}
    </>
  );
};
export default SingleItem;
