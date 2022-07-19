import styled from "styled-components";

export const StyledHeader = styled.div`
  height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 15px;
  background-color: #2b2c37;
  border-bottom: 0.5px solid #828fa3;
  
  a {
    text-decoration: none;
  }

  div {
    display: flex;
    flex-direction: row;
  }

  h2 {
    color: white;
  }

  p {
    color: white;
    padding: 12px 20px;
  }
`;


export const AddButton = styled.button`
  padding: 10px 15px;
  margin: 10px;
  color: white;
  border: none;
  border-radius: 90px;
  background-color: #635fc7;
  cursor: pointer;
  z-index: 2;

  :hover {
    background-color: #a8a4ff;
  }
`;
