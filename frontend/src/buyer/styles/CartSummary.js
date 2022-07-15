import styled from "styled-components";

export const StyledBackdrop = styled.div`
  width: 100%;
  min-height: 100vh;
  position: absolute;
  top: 8vh;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const StyledCartContainer = styled.div`
  width: 377px;
  border-radius: 10px;
  background-color: white;
  position: absolute;
  right: 10%;
  top: 3%;
  background-color: white;
  padding: 1.5rem 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  img {
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: 10px;
  }

  a {
    padding-block: 1rem;
    border: none;
    background-color: #d87d4a;
    font-size: 18px;
    color: white;
    cursor: pointer;
    text-align: center;
    text-decoration: none;

    &:hover {
      background: #fbaf85;
    }
  }
`;

export const StyledFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledProductContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  p:nth-child(1) {
    font-weight: 500;
    margin: 0;
    margin-bottom: 0.5rem;
  }
  p:nth-child(2) {
    font-weight: 500;
    color: gray;
    margin: 0;
  }
`;

export const StyledBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding-inline: 0.5rem;
  background: #f1f1f1;

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;

export const StyledTotalAmount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 18px;
    color: gray;
  }

  span {
    font-size: 24px;
    font-weight: 500;
  }
`;

export const StyledCheckOutBtn = styled.button`
  padding-block: 1rem;
  border: none;
  background-color: #d87d4a;
  font-size: 18px;
  color: white;
  cursor: pointer;

  &:hover {
    background: #fbaf85;
  }
`;

export const StyledRemoveAllBtn = styled.button`
  font-size: 18px;
  font-weight: 300;
  border: none;
  background: none;
  color: gray;
  text-decoration: underline;
  cursor: pointer;
`;
