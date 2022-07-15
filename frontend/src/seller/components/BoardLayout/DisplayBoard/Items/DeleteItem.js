import { StyledBackdrop } from "../../../../styles/AddItem";
import {
  StyledCard,
  StyledButtonContainer,
} from "../../../../styles/DeleteItem";
import { useDispatch } from "react-redux";
import {
  DELETE_ITEM_FROM_COLUMN,
  TOGGLE_WARNING_MESSAGE,
} from "../../../../../redux/productSlice";

// the props passed down come from the SingleItem Component
const DeleteItem = ({ productId }) => {
  const dispatch = useDispatch();

  // this will delete the item from the Online Column
  const handleDeleteItem = () => {
    dispatch(DELETE_ITEM_FROM_COLUMN(productId));
  };

  return (
    <StyledBackdrop>
      <StyledCard>
        <h2>Delete this item?</h2>
        <p>
          Are you sure you want to delete the item? This action cannot be
          reveresed!
        </p>
        <StyledButtonContainer>
          <button onClick={handleDeleteItem}>Delete</button>
          <button onClick={() => dispatch(TOGGLE_WARNING_MESSAGE())}>
            Cancel
          </button>
        </StyledButtonContainer>
      </StyledCard>
    </StyledBackdrop>
  );
};
export default DeleteItem;
