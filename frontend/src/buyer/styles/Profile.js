import styled from "styled-components";

export const StyledOuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  flex: 3;
  gap: 3rem;

  h1 {
    font-weight: 500;
  }

  h2 {
    color: #d87d4a;
    font-size: 16px;
    font-weight: 400;
    text-transform: uppercase;
  }
`;

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-size: 14px;
    font-weight: 500;
  }

  input {
    padding: 1rem;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    color: gray;

    &:focus {
      outline: none;
      border: 1px solid #d87d4a;
    }
  }
`;

export const StyledInputGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

export const StyledBtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledSaveBtn = styled.button`
  padding: 1rem 2rem;
  border: none;
  background-color: #d87d4a;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 300;
  color: white;
  cursor: pointer;

  &:hover {
    background: #fbaf85;
  }
`;

export const StyledDeleteBtn = styled.button`
  padding: 1rem 1.5rem;
  border: none;
  background-color: #ea5555;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 300;
  color: white;
  cursor: pointer;

  &:hover {
    background: #ff9898;
  }
`;

export const StyledRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  align-self: start;
`;
