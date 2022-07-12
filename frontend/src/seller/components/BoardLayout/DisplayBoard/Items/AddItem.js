import styled from "styled-components";

import {
  StyledBackdrop,
  StyledContainer,
  StyledForm,
  StyledGrid,
  StyledInputContainer,
  StyledButton,
} from "../../../../styles/AddItem";

const AddItem = () => {
  return (
    <StyledBackdrop>
      <StyledContainer>
        <StyledForm>
          <h1>Add New Item</h1>

          <StyledGrid>
            <StyledInputContainer>
              <label htmlFor="name">Title</label>
              <input type="text" id="name" name="name" />
            </StyledInputContainer>
            <StyledInputContainer>
              <label htmlFor="price">Price</label>
              <input type="text" name="price" id="price" />
            </StyledInputContainer>
            <StyledInputContainer>
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                cols="30"
                rows="10"
              ></textarea>
            </StyledInputContainer>
            <StyledInputContainer>
              <label htmlFor="features">Features</label>
              <input type="text" id="features" name="features" />
            </StyledInputContainer>
            <StyledInputContainer>
              <label htmlFor="boxItems">Items Contained In The Box</label>
              <input type="text" name="boxItems" id="boxItems" />
            </StyledInputContainer>
            <StyledInputContainer>
              <label htmlFor="image">Images</label>
              <input type="file" name="image" id="image" />
            </StyledInputContainer>
          </StyledGrid>

          <StyledButton>Create Item</StyledButton>
        </StyledForm>
      </StyledContainer>
    </StyledBackdrop>
  );
};
export default AddItem;
