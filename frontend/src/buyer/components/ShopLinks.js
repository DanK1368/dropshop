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

const ShopLinks = () => {
    return (
        
        <StyledAllLinks>
            <StyledHeadphones>
                <img src={Headphones} alt="Headphone Icon" />
                <h4>HEADPHONES</h4>
                <button>SHOP<HiChevronRight size={20}/></button>
            </StyledHeadphones>
            <StyledSpeakers>
                <img src={Earphones} alt="Speaker Icon" />
                <h4>HEADPHONES</h4>
                <button>SHOP<HiChevronRight size={20} /></button>
            </StyledSpeakers>
            <StyledEarphones>
                <img src={Speakers} alt="Earphone Icon" />
                <h4>HEADPHONES</h4>
                <button>SHOP<HiChevronRight size={20}/></button>
            </StyledEarphones>
        </StyledAllLinks>
    );
};

export default ShopLinks;