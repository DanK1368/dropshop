import styled from "styled-components";


export const Columns = styled.div`
  max-width: 300px;
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

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(11, 1fr);
  gap: 1rem;
  place-items: center;
  overflow: scroll;
  padding-top: 0.5rem;
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
