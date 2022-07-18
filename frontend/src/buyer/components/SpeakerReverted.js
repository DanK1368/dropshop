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
                    <h5>NEW PRODUCTS</h5>
                    <h2>XX99 MARK I HEADPHONES</h2>
                    <p>The new XX99 Mark I headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
                    <StyledSeeProduct>SEE PRODUCT</StyledSeeProduct>
                </StyledInnerDescriptionBox>
            </StyledDescriptionBox>
            <img src={ZX7} alt="Headphones" />
        </StyledWholeItem>
    );
};

export default SpeakersZX7