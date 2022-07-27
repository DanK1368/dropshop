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
    height: 50px;
    width: 50px;
    object-fit: cover;
    margin-top: 0.5rem;
  }

  h2 {
    text-align: center;
    font-weight: 400;
    font-size: 14px;
  }

  p {
    font-size: 12px;
    margin: 0;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 1rem;
  }
`;

export const StyledItemInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    border-radius: 9999px;
    padding: 0.5rem 0.7rem;
    cursor: pointer;
    font-size: 12px;

    &:hover {
      background: #a9a4ffc5;
    }

    &:focus-within {
      background-color: #bafe3bff;
      color: black;
    }
  }
`;
