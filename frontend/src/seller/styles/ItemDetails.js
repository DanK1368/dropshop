import styled from "styled-components";

export const StyledBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 11;
`;

export const StyledContainer = styled.div`
  color: white;
  background: #3e3f4e;
  width: 480px;
  height: 675px;
  padding: 2rem;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledForm = styled.form`
  display: grid;
  gap: 2rem;

  h1 {
    text-align: center;
  }
`;

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, 1fr));
  gap: 1rem;
`;

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-size: 12px;
  }

  input,
  textarea {
    padding: 0.5rem;
    background: none;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    cursor: pointer;
    color: white;

    &:focus {
      outline: none;
      border: 1px solid rgb(168, 164, 255);
    }
  }

  input[type="file"] {
    border: none;
  }

  // description textarea field
  &:nth-child(3) {
    grid-column: 1 / 3;
  }

  &:nth-child(8) {
    grid-column: 1 / 3;
  }
`;

export const StyledButton = styled.button`
  width: 100%;
  background: rgb(99, 95, 199);
  padding-block: 0.5rem;
  text-align: center;
  border-radius: 9999px;
  cursor: pointer;
  border: none;
  color: white;

  &:hover {
    background: rgb(168, 164, 255);
  }

  &:active {
    transform: scale(103%);
  }
`;
