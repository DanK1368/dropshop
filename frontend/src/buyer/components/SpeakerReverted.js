import React from "react";
import ZX7 from "../../assets/shared/desktop/image-zx7-speaker.jpg";
import {
    StyledWholeItem,
    StyledDescriptionBox,
    StyledInnerDescriptionBox,
} from "../styles/ItemForSaleMirrored";
import { StyledSeeProduct } from "../styles/SeeProductButton";

const SpeakersZX7 = () => {
    return (
        <StyledWholeItem>
            <StyledDescriptionBox>
                <StyledInnerDescriptionBox>
                    <h2>ZX7 SPEAKER</h2>
                    <p>Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.</p>
                    <StyledSeeProduct>SEE PRODUCT</StyledSeeProduct>
                </StyledInnerDescriptionBox>
            </StyledDescriptionBox>
            <img src={ZX7} alt="Speakers" />
        </StyledWholeItem>
    );
};

export default SpeakersZX7