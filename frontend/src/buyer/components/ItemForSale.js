import React from "react";
import { useNavigate } from "react-router-dom";

import {
  StyledWholeItem,
  StyledDescriptionBox,
  StyledInnerDescriptionBox,
} from "../styles/ItemForSale";
import { StyledSeeProduct } from "../styles/SeeProductButton";

const ItemForSale = ({ id, image, name, description, idx }) => {
  const navigate = useNavigate();

  return (
    <StyledWholeItem layout={idx % 2 !== 0 && "row-reverse"}>
      <img src={image} alt="Headphones" />
      <StyledDescriptionBox>
        <StyledInnerDescriptionBox>
          <h5>NEW PRODUCT</h5>
          <h2>{name}</h2>
          <p>{description}</p>
          <StyledSeeProduct onClick={() => navigate(`/productdetails/${id}`)}>
            SEE PRODUCT
          </StyledSeeProduct>
        </StyledInnerDescriptionBox>
      </StyledDescriptionBox>
    </StyledWholeItem>
  );
};

export default ItemForSale;
