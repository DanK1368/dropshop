import React from "react";
import ZX9 from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import {
    StyledDescriptionBox,
    StyledInnerDescriptionBox,
    StyledWholeItem,
} from "../styles/ItemForSale";
import { StyledSeeProduct } from "../styles/SeeProductButton";


const SpeakersZX9 = () => {
    return (
        <StyledWholeItem>            
                <img src={ZX9} alt="Speakers"/>
            <StyledDescriptionBox>
                <StyledInnerDescriptionBox>
                    <h5>NEW PRODUCT</h5>
                    <h2>ZX9 SPEAKER</h2>
                    <p>Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.</p>
                    <StyledSeeProduct>SEE PRODUCT</StyledSeeProduct>
                </StyledInnerDescriptionBox>
            </StyledDescriptionBox>
        </StyledWholeItem>
    );
};

export default SpeakersZX9;