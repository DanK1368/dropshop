import React from "react";
import Headphones from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import Speakers from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import Earphones from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import {
  StyledAllLinks,
  StyledHeadphones,
  StyledSpeakers,
  StyledEarphones,
} from "../styles/ShopLinks";
import { HiChevronRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const ShopLinks = () => {
  return (
    <StyledAllLinks>
      <StyledHeadphones>
        <img src={Headphones} alt="Headphone Icon" />
        <h4>HEADPHONES</h4>
        <Link to="/category-headphones">
          SHOP
          <HiChevronRight size={20} color="#d87d4a" />
        </Link>
      </StyledHeadphones>
      <StyledSpeakers>
        <img src={Earphones} alt="Speaker Icon" />
        <h4>SPEAKERS</h4>
        <Link to="/category-speakers">
          SHOP
          <HiChevronRight size={20} color="#d87d4a" />
        </Link>
      </StyledSpeakers>
      <StyledEarphones>
        <img src={Speakers} alt="Earphone Icon" />
        <h4>EARPHONES</h4>
        <Link to="/category-earphones">
          SHOP
          <HiChevronRight size={20} color="#d87d4a" />
        </Link>
      </StyledEarphones>
    </StyledAllLinks>
  );
};

export default ShopLinks;
