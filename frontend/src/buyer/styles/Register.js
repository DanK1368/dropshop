import styled from "styled-components";

export const StyledContainer = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 2rem;
  padding-top: 4rem;

  h1 {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 500;
  }

  span {
    color: #d87d4a;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  input {
    padding: 1rem;
    border: none;
    border-bottom: 1px solid #d87d4a;
    font-size: 18px;
    text-align: center;
    letter-spacing: 1px;

    &:focus {
      outline: none;
      border-bottom: 2px solid #fbaf85;
    }

    &::placeholder {
      color: rgba(0, 0, 0, 0.4);
    }
  }

  label {
    display: flex;
    flex-direction: column;
  }

  a {
    text-decoration: none;
    color: gray;
    font-weight: 300;
  }

  button {
    padding: 1rem 2rem;
    background-color: #d87d4a;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 18px;
  }
`;

export const StyledFormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
`;
