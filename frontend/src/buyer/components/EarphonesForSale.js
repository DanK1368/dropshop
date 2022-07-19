import React from "react";
import earphones from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import {
    StyledDescriptionBox,
    StyledInnerDescriptionBox,
    StyledWholeItem,
} from "../styles/ItemForSale";
import { StyledSeeProduct } from "../styles/SeeProductButton";


const Earphones = () => {
    return (
        <StyledWholeItem>            
                <img src={earphones} alt="Speakers"/>
            <StyledDescriptionBox>
                <StyledInnerDescriptionBox>
                    <h5>NEW PRODUCT</h5>
                    <h2>YX1 WIRELESS EARPHONES</h2>
                    <p>Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.</p>
                    <StyledSeeProduct>SEE PRODUCT</StyledSeeProduct>
                </StyledInnerDescriptionBox>
            </StyledDescriptionBox>
        </StyledWholeItem>
    );
};

export default Earphones;