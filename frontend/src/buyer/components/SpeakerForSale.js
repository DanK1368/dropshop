import React from "react";
import { useNavigate } from "react-router-dom";
import ZX9 from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import {
  StyledDescriptionBox,
  StyledInnerDescriptionBox,
  StyledWholeItem,
} from "../styles/ItemForSale";
import { StyledSeeProduct } from "../styles/SeeProductButton";
import { InView } from "react-intersection-observer";

const SpeakersZX9 = ({ id, name, image, description, idx }) => {
  const navigate = useNavigate();
  return (
    <InView threshold={0.25}>
      {({ ref, inView }) => (
        <StyledWholeItem
          layout={idx % 2 !== 0 && "row-reverse"}
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={image} alt="Speakers" />
          <StyledDescriptionBox>
            <StyledInnerDescriptionBox>
              <h5>NEW PRODUCT</h5>
              <h2>{name}</h2>
              <p>{description}</p>
              <StyledSeeProduct
                onClick={() => navigate(`/productdetails/${id}`)}
              >
                SEE PRODUCT
              </StyledSeeProduct>
            </StyledInnerDescriptionBox>
          </StyledDescriptionBox>
        </StyledWholeItem>
      )}
    </InView>
  );
};

export default SpeakersZX9;
