import React from "react";
import XX99 from "../../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import {
    StyledWholeItem,
    StyledDescriptionBox,
    StyledInnerDescriptionBox,
} from "../styles/ItemForSale";

const ItemForSale = () => {
    return (
        <StyledWholeItem>
            <img src={XX99} alt="Headphones" />
            <StyledDescriptionBox>
                <StyledInnerDescriptionBox>
                    <h5>NEW PRODUCTS</h5>
                    <h2>XX99 MARK II HEADPHONES</h2>
                    <p>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
                    <button>SEE PRODUCT</button>
                </StyledInnerDescriptionBox>
            </StyledDescriptionBox>
        </StyledWholeItem>
    );
};

export default ItemForSale;