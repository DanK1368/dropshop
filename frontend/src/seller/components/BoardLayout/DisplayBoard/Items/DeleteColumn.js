import { StyledBackdrop } from "../../../../styles/AddItem";
import {
  StyledCard,
  StyledButtonContainer,
} from "../../../../styles/DeleteItem";
import { useDispatch } from "react-redux";
import { TOGGLE_WARNING_MESSAGE } from "../../../../../redux/columnSlice";
import { deleteSingleColumn } from "../../../../../redux/columnApiCalls";

const DeleteItem = ({ columnId }) => {
  const dispatch = useDispatch();

  // this will delete the column
  const handleDeleteColumn = () => {
    deleteSingleColumn(columnId, dispatch);
  };

  return (
    <StyledBackdrop>
      <StyledCard>
        <h2>Delete this item?</h2>
        <p>
          Are you sure you want to delete this column? This action cannot be
          reveresed!
        </p>
        <StyledButtonContainer>
          <button onClick={handleDeleteColumn}>Delete</button>
          <button onClick={() => dispatch(TOGGLE_WARNING_MESSAGE())}>
            Cancel
          </button>
        </StyledButtonContainer>
      </StyledCard>
    </StyledBackdrop>
  );
};
export default DeleteItem;
