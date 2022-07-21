import React from "react";
import {
    StyledItemContainer,
    StyledPicture,
    StyledItemDescription,
} from "../styles/MarketItem"
import DefaultImage from "../../assets/shared/desktop/image-xx99-mark-one-headphones.jpg";
import { useSelector } from "react-redux";

const MarketItem = () => {

    const { dummyInventory } = useSelector(state => state.product);

    return (

        <StyledItemContainer>

            <StyledPicture>

                <img src={ DefaultImage }/>

            </StyledPicture>

            <StyledItemDescription>

                <h3>{dummyInventory[0].category.name}</h3>
                <p>{dummyInventory[0].price}</p>

            </StyledItemDescription>

        </StyledItemContainer>

    );
};

export default MarketItem;
