import React from "react";
import {
    StyledItemContainer,
    StyledPicture,
    StyledItemDescription,
} from "../styles/MarketItem"
import DefaultImage from "../../assets/shared/desktop/image-xx59-headphones.jpg";

const MarketItem = () => {

    return (
        <>
        <StyledItemContainer>
            <StyledPicture>
                <img src={DefaultImage}/>
            </StyledPicture>
            <StyledItemDescription>
                <h3>Titel</h3>
                <p>1799.50$</p>
            </StyledItemDescription>
        </StyledItemContainer>
        </>
    );
};

export default MarketItem;