import styled from "styled-components";

export const StyledCard = styled.article`
  background: #20212c;
  width: 280px;
  max-height: 120px;
  border-radius: 5px;
  color: white;
  padding: 0.2rem;
  box-shadow: 0 2px 10px rgba(255, 255, 255, 0.3);
  display: grid;
  place-content: center;
  cursor: pointer;
  position: relative;

  button {
    width: 30px;
    position: absolute;
    right: 5px;
    top: 5px;
    background: none;
    border: none;
    cursor: pointer;

    &:hover {
      transform: scale(120%);
    }
  }

  :hover {
    border: 1px solid #a8a4ff;
    margin: -1px;
  }

  h2 {
    text-align: center;
    font-weight: 400;
    font-size: 1.2rem;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
`;
