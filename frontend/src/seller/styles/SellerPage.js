import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Board = styled.div`
  width: 100%;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const InnerPage = styled.div`
  width: 100%;
  overflow: scroll;
  display: grid;
  height: 100vh;
  grid-template-columns: repeat(6, minmax(350px, 1fr));
  background-color: #000112;
  padding-block: 1rem;
`;
