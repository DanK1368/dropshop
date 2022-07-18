import styled from "styled-components";

export const StyledSideBar = styled.div`
  display: flex;
  flex-direction: column;
  background: #2b2c37;
  height: 100vh;
  border-right: 0.5px solid #828fa3;
  padding-inline: 4rem;
`;

export const StyledSideHeader = styled.div`
  display: flex;

  h1 {
    color: white;
  }
`;

export const StyledSideBody = styled.div`
  display: flex;
`;

export const StyledSideMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding-top: 5rem;
`;


export const StyledAddButton = styled.button`
padding: 10px 15px;
  color: white;
  border: none;
  border-radius: 90px;
  background-color: #635fc7;
  cursor: pointer;
  z-index: 2;

  :hover {
    background-color: #a8a4ff;
  }

    :active {
      transform: scale(103%);
    }
  }
`;