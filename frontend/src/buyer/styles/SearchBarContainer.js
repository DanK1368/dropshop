import styled from "styled-components";

export const SearchBarContainer = styled.form`
  display: flex;
  justify-content: center;
  padding: 20px;
  gap: 2rem;
  input {
    color: black;
    border: 2px solid red;
    height: 45px;
    padding: 0px 30px;
    border: none;
    border-bottom: 1px solid #d87d4a;

    cursor: pointer;
  }

  button {
    padding: 0.5rem 1.5rem;
    background-color: #d87d4a;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 18px;

    &:hover {
      background: #fbaf85;
    }

    &:focus {
      outline: none;
    }
  }
`;
