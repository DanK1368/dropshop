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

  a {
    color: white;
    text-decoration: none;
  }
`;

export const PageLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 40%;
  margin-right: 100px;

  a,
  button {
    font-size: 14px;
    text-decoration: none;
    color: white;
    cursor: pointer;

    &:hover {
      color: #d87d4a;
    }
  }

  button {
    background: none;
    border: none;
  }

  .active {
    color: #d87d4a;
  }
`;

export const StyledShowCartBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const StyledProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  p {
    text-align: center;
    font-size: 10px;
    line-height: 1.5;
  }

  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;

    &:hover {
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
    }
  }
`;

export const StyledCartContainer = styled.div`
  position: relative;

  p {
    position: absolute;
    font-size: 16px;
    top: -35px;
    right: -20px;
    background-color: #d87d4a;
    width: 25px;
    height: 25px;
    display: grid;
    place-content: center;
    border-radius: 50%;
  }
`;
