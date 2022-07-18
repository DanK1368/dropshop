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
    text-align: center;
    line-height: 1.5;
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

  a {
    text-decoration: none;
    color: #d87d4a;
    cursor: pointer;
  }

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
      margin-bottom: -1px;
    }

    &::placeholder {
      color: rgba(0, 0, 0, 0.4);
    }
  }

  label {
    display: flex;
    flex-direction: column;
  }

  button {
    padding: 1rem 2rem;
    background-color: #d87d4a;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 18px;

    &:hover {
      background: #fbaf85;
    }
  }
`;

export const StyledFormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
`;
