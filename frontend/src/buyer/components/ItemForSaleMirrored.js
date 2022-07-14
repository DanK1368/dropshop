import React from "react";
import XX99 from "../../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import {
    StyledWholeItem,
    StyledDescriptionBox,
    StyledInnerDescriptionBox,
} from "../styles/ItemForSaleMirrored";

const ItemForSale = () => {
    return (
        <StyledWholeItem>
            <StyledDescriptionBox>
                <StyledInnerDescriptionBox>
                    <h5>NEW PRODUCTS</h5>
                    <h2>XX99 MARK I HEADPHONES</h2>
                    <p>The new XX99 Mark I headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
                    <button>SEE PRODUCT</button>
                </StyledInnerDescriptionBox>
            </StyledDescriptionBox>
            <img src={XX99} alt="Headphones" />
        </StyledWholeItem>
    );
};

export default ItemForSale;