import styled from "styled-components";

export const StyledGoBackBtnContainer = styled.div`
  padding-bottom: 5rem;

  button {
    font-size: 18px;
    color: gray;
    font-weight: 300;
    cursor: pointer;
    text-decoration: none;
    background: none;
    border: none;

    &:hover {
      color: #d87d4a;
    }
  }
`;

export const StyledProductContainer = styled.div`
  display: flex;

  img {
    max-width: 500px;
    object-fit: cover;
    border-radius: 10px;
  }
`;

export const StyledProductDetails = styled.div`
  padding: 3rem;
  padding-inline: 5rem;

  h2 {
    font-size: 12px;
    font-weight: 200;
    text-transform: uppercase;
    letter-spacing: 8px;
    color: #d87d4a;
  }
`;

export const StyledCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  div {
    display: flex;
    justify-content: flex-start;

    align-items: center;
    gap: 5rem;
  }

  h3 {
    font-size: 30px;
    text-transform: uppercase;
    max-width: 10ch;
    font-weight: 500;
  }

  p {
    line-height: 1.7;
  }
`;

export const StyledPriceContainer = styled.div`
  .originalPrice {
    text-decoration: line-through;
    font-weight: 100;
  }

  .discountedPrice {
    font-weight: 800;
    font-size: 18px;
    color: #d87d4a;
  }

  h5 {
    margin: 0;
    padding-top: 10px;
  }
`;

export const StyledBtnContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  padding-top: 1rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background: #f1f1f1;
    padding-inline: 0.5rem;

    button {
      background: none;
      border: none;
      padding-inline: 1rem;
      cursor: pointer;
    }
  }
`;

export const StyledAddToCartBtn = styled.button`
  background: none;
  border: none;
  padding: 1rem 2rem;
  background-color: #d87d4a;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #fbaf85;
  }
`;

export const StyledFeaturesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-block: 7rem;
`;

export const StyledFeatures = styled.div`
  flex: 1;

  p {
    max-width: 60ch;
    line-height: 2;
    font-size: 18px;
  }

  h4 {
    font-size: 35px;
    text-transform: uppercase;
    font-weight: 500;
  }
`;

export const StyledBoxItems = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  place-items: center;

  ul {
    display: grid;
    gap: 2rem;
  }

  li {
    list-style: none;
    display: flex;
    justify-content: flex-start;
    gap: 2rem;
  }

  h4 {
    font-size: 35px;
    text-transform: uppercase;
    font-weight: 500;
  }

  p {
    font-size: 18px;
  }

  span {
    color: #d87d4a;
    font-size: 18px;
  }
`;

export const StyledPictureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding-block: 7rem;

  img {
    object-fit: cover;
    border-radius: 10px;
  }

  img:nth-child(1) {
    grid-column: 1 / 2;
    justify-self: start;
    width: clamp(400px, 100%, 600px);
    height: 100%;
  }
  img:nth-child(2) {
    grid-column: 1 / 2;
    justify-self: start;
    width: clamp(400px, 100%, 600px);
    height: 100%;
  }
  img:nth-child(3) {
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    justify-self: end;
    width: clamp(500px, 100%, 100%);
    height: 100%;
  }
`;

export const StyledPrice = styled.div`
  line-height: 1.7;
`;

export const StyledTitel = styled.div`
  font-weight: bold;
  font-size: 27px;
`;
