import React from "react";
import {
    StyledWholeItem,
    StyledDescriptionBox,
} from "../styles/ItemForSale";

const ItemForSale = () => {
    return (
        <StyledWholeItem>
            <StyledDescriptionBox>
                <h5>NEW PRODUCTS</h5>
                <h2>XX99 MARK II HEADPHONES</h2>
                <p>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>

            </StyledDescriptionBox>
        </StyledWholeItem>
    );
};

export default ItemForSale;