import { useContext } from "react";
import { StyledBackdrop } from "../../../../styles/AddItem";
import {
  StyledCard,
  StyledButtonContainer,
} from "../../../../styles/DeleteItem";
import productContext from "../../../../context/products/ProductContext";

// the props passed down come from the SingleItem Component
const DeleteItem = ({ showWarning, setShowWarning, productId }) => {
  const { dispatch } = useContext(productContext);

  // this will delete the item from the Online Column
  const handleDeleteItem = () => {
    dispatch({ type: "DELETE_FROM_COLUMN", payload: productId });
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
          <button onClick={() => setShowWarning(!showWarning)}>Cancel</button>
        </StyledButtonContainer>
      </StyledCard>
    </StyledBackdrop>
  );
};
export default DeleteItem;
