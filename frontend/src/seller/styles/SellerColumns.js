import styled from "styled-components";

export const StyledColumnContainer = styled.div`
  width: fit-content;
`;

export const Columns = styled.div`
  width: 300px;
  height: 80%;
  color: white;
  padding: 5px 10px;
  text-align: center;
  background-color: rgba(43, 44, 55, 0.5);
  margin-left: 1rem;
  border-radius: 10px;

  h4 {
    color: #a8a4ff;
    font-size: 24px;
  }
`;

export const StyledSearchBar = styled.label`
  input {
    border: none;
    width: 80%;
    margin: 0 auto;
    padding: 0.5rem 1rem;
    background-color: #635fc7;
    color: black;
    font-weight: 600;
    letter-spacing: 1px;
    color: white;
    border-radius: 5px;

    &:focus {
      outline: none;
      border: 1px solid #a8a4ff;
      margin: -1px;
    }
  }
`;

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(11, 1fr);
  gap: 1rem;
  place-items: center;
  overflow: scroll;
  padding-top: 2rem;
`;
// export const Columns = styled.div`
//   display: grid;
//   grid-template-columns: repeat(1, 1fr);
//   //grid:;
//   //gap:;
//   color: white;
//   background-color: green;
//   padding: 5px 10px;
// `;

export const StyledDeleteBtn = styled.button`
  width: 30px;
  position: absolute;
  top: 5px;
  right: 5px;
  background: none;
  border: none;
  cursor: pointer;
`;
