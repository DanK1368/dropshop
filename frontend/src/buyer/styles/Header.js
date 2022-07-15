import styled from "styled-components";

export const Main = styled.div`
  height: 8vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: #000000;
  color: white;
  font-family: "Plus Jakarta Sans", sans-serif;
  border-bottom: #ffffff;
  position: relative;
`;

export const PageLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 40%;
  margin-right: 100px;

  p {
    font-size: 12px;
  }
`;

export const StyledShowCartBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
