import { useEffect, useState } from "react";
import {
  StyledBackdrop,
  StyledContainer,
  StyledForm,
  StyledGrid,
  StyledInputContainer,
  StyledButton,
} from "../../../../styles/AddColumn";
import { ADD_COLUMN } from "../../../../../redux/columnSlice";
import { useDispatch } from "react-redux";
import {
  createNewColumn,
  listAllColumns,
} from "../../../../../redux/columnApiCalls";

const AddColumn = () => {
  const dispatch = useDispatch();
  const [columnData, setColumnData] = useState({
    id: Math.floor(Math.random() * 10),
    title: "",
  });

  const handleAddColumn = e => {
    e.preventDefault();
    createNewColumn(columnData, dispatch);
  };

  return (
    <StyledBackdrop>
      <StyledContainer>
        <StyledForm onSubmit={handleAddColumn}>
          <h1>Add New Column</h1>
          <StyledGrid>
            <StyledInputContainer>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={columnData.title}
                onChange={e =>
                  setColumnData(prevState => {
                    return { ...prevState, [e.target.name]: e.target.value };
                  })
                }
              />
            </StyledInputContainer>
          </StyledGrid>

          <StyledButton>Create Column</StyledButton>
        </StyledForm>
      </StyledContainer>
    </StyledBackdrop>
  );
};
export default AddColumn;
