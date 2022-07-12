import { StyledBackdrop } from "../../../../styles/AddItem";
import {
  StyledCard,
  StyledButtonContainer,
} from "../../../../styles/DeleteItem";

const DeleteItem = () => {
  return (
    <StyledBackdrop>
      <StyledCard>
        <h2>Delete this item?</h2>
        <p>
          Are you sure you want to delete the item? This action cannot be
          reveresed!
        </p>
        <StyledButtonContainer>
          <button>Delete</button>
          <button>Cancel</button>
        </StyledButtonContainer>
      </StyledCard>
    </StyledBackdrop>
  );
};
export default DeleteItem;
