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

  a {
    color: #d87d4a;
    text-decoration: none;
    cursor: pointer;
  }

  span {
    color: #d87d4a;
  }

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
