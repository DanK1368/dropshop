import styled from "styled-components";

export const StyledCard = styled.div`
  background-color: #3e3f4e;
  max-width: 480px;
  padding: 2rem;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h2 {
    color: #ea5555;
    font-size: 16px;
  }

  p {
    color: #828fa3;
    line-height: 1.5;
    padding-block: 0.5rem;
  }
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  button {
    padding: 0.5rem 4rem;
    border: none;
    border-radius: 999px;
    cursor: pointer;

    :active {
      transform: scale(103%);
    }
  }

  button:nth-child(1) {
    background-color: #ea5555;
    color: white;
  }

  button:nth-child(2) {
    background-color: white;
    color: #635fc7;
  }
`;
