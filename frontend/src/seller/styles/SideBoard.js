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

  button {
    color: white;
    padding: 5px;
    background: transparent;
    border: none;
    border-radius: 90px;
    font-weight: bold;
    cursor: pointer;

    :hover {
      background: #635fc7;
    }

    :active {
      transform: scale(103%);
    }
  }

  button:nth-child(5) {
    background: transparent;
    border: none;
    color: #635fc7;

    :hover {
      color: white;
      background: #635fc7;
    }

    :active {
      transform: scale(103%);
    }
  }
`;
