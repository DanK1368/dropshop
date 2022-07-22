import React, { useEffect } from "react";
import {
    StyledItemContainer,
    StyledPicture,
    StyledItemDescription,
} from "../styles/MarketItem"
import DefaultImage from "../../assets/shared/desktop/image-xx99-mark-one-headphones.jpg";
import { useDispatch, useSelector } from "react-redux";
import { listAllItems } from "../../redux/productApiCalls";

const MarketItem = ({image, name, price, item}) => {

    // const { dummyInventory } = useSelector(state => state.product);

    return (

        <StyledItemContainer>

            <StyledPicture>

                <img src={image}/>

            </StyledPicture>

            <StyledItemDescription>

                <h3>{name}</h3>
                <p>{price}</p>

            </StyledItemDescription>

        </StyledItemContainer>

    );
};

export default MarketItem;
