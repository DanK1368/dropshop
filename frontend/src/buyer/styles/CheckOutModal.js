import styled from "styled-components";

export const StyledBackdrop = styled.div`
  width: 100%;
  min-height: 100vh;
  position: absolute;
  top: 8vh;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: grid;
  place-content: center;
`;

export const StyledCartContainer = styled.div`
  width: 377px;
  border-radius: 10px;
  background-color: white;
  background-color: white;
  padding: 1.5rem 2.5rem;
  display: flex;
  flex-direction: column;
  padding-block: 2rem;

  a {
    padding-block: 1rem;
    border: none;
    background-color: #d87d4a;
    font-size: 18px;
    text-align: center;
    text-decoration: none;
    color: white;
    cursor: pointer;

    &:hover {
      background: #fbaf85;
    }
  }

  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 10px;
  }

  h3 {
    font-size: 24px;
    text-transform: uppercase;
    font-weight: 500;
    line-height: 1.5;
  }
`;

export const StyledFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-block: 2rem;
`;

export const StyledProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding-bottom: 1rem;
  background: #f1f1f1;
  border-radius: 10px 0 0 10px;
  padding: 1rem 1rem 1rem 1.5rem;

  hr {
    width: 100%;
    height: 1px;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }

  p {
    font-size: 12px;
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

export const StyledInnerProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  align-self: start;
`;

export const StyledOtherItems = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.2);
`;

export const StyledTotalAmount = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 0.5rem;
  flex: 1;
  background: black;
  height: 100%;
  border-radius: 0 10px 10px 0;
  padding-left: 2rem;

  p {
    font-size: 14px;
    color: gray;
    margin: 0;
  }

  span {
    font-size: 14px;
    font-weight: 500;
    color: white;
  }
`;
