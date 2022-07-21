import styled from "styled-components";

export const StyledCardContainer = styled.div`
  position: relative;
`;

export const StyledCard = styled.article`
  background: #20212c;
  width: 280px;
  border-radius: 5px;
  color: white;
  padding: 0.2rem;
  box-shadow: 0 2px 10px rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;

  img {
    height: 60px;
    width: 60px;
    object-fit: cover;
    margin-top: 2rem;
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

export const StyledDeleteBtn = styled.button`
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
`;

export const StyledBtnContainer = styled.div`
  padding-block: 1rem;

  button {
    position: initial;
    background: #a8a4ff;
    border: none;
    color: white;
    width: 100%;
    border-radius: 9999px;
    padding: 0.2rem 0.5rem;
    cursor: pointer;

    &:hover {
      background: #a9a4ffc5;
    }
  }
`;
