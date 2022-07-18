import styled from "styled-components";

export const StyledCartContainer = styled.div`
  min-width: 250px;
  border-radius: 10px;
  background-color: white;
  background-color: white;
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  flex: 1;
  align-self: start;

  img {
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: 10px;
  }
`;

export const StyledFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;

  div:nth-child(1) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  p {
    font-size: 14px;
  }

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

export const StyledTotalAmount = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  div:nth-child(3) {
    span {
      color: #d87d4a;
    }
  }

  p {
    font-size: 14px;
    color: gray;
    font-weight: 300;
  }

  span {
    font-size: 14px;
    font-weight: 500;
  }
`;

export const StyledContinuePayBtn = styled.button`
  padding-block: 1rem;
  border: none;
  background-color: #d87d4a;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 300;
  color: white;
  cursor: pointer;

  &:hover {
    background: #fbaf85;
  }
`;
