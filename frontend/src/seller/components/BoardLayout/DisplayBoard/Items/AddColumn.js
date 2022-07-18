import {
    StyledBackdrop,
    StyledContainer,
    StyledForm,
    StyledGrid,
    StyledInputContainer,
    StyledButton,
  } from "../../../../styles/AddColumn";
  
  const AddColumn = () => {
    return (
      <StyledBackdrop>
        <StyledContainer>
          <StyledForm>
            <h1>Add New Column</h1>
            <StyledGrid>
              <StyledInputContainer>
                <label htmlFor="name">Title</label>
                <input type="text" id="name" name="name" />
              </StyledInputContainer>
            </StyledGrid>
  
            <StyledButton>Create Column</StyledButton>
          </StyledForm>
        </StyledContainer>
      </StyledBackdrop>
    );
  };
  export default AddColumn;
  