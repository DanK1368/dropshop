import React from "react";
import earphones from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import {
  StyledDescriptionBox,
  StyledInnerDescriptionBox,
  StyledWholeItem,
} from "../styles/ItemForSale";
import { StyledSeeProduct } from "../styles/SeeProductButton";
import { useNavigate } from "react-router-dom";

const Earphones = ({ id, name, image, description, idx }) => {
  const navigate = useNavigate();

  return (
    <StyledWholeItem layout={idx % 2 !== 0 && "row-reverse"}>
      <img src={image} alt="Speakers" />
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

export default Earphones;
