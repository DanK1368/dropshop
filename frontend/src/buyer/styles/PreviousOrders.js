import styled from "styled-components";

export const StyledCartContainer = styled.div`
  min-width: 250px;
  width: 100%;
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
