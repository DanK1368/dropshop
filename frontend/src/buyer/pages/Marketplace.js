import React, { useEffect } from "react";
import MarketItem from "../components/MarketItem";
import { Grid } from "../styles/Marketplace";
import { useDispatch, useSelector } from "react-redux";
import { listAllItems } from "../../redux/productApiCalls";
import {
    StyledItemContainer,
    StyledPicture,
    StyledItemDescription,
} from "../styles/MarketItem";
import { useNavigate } from "react-router-dom";

const Marketplace = ({ id, image, name, price }) => {
    const navigate = useNavigate();

    return (

        <Grid>

            <StyledItemContainer onClick={() => navigate(`/productdetails/${id}`)}>
                <StyledPicture>
                    <img src={image} />
                </StyledPicture>
                <StyledItemDescription>
                    <h3>{name}</h3>
                    <p>{price}</p>
                </StyledItemDescription>
            </StyledItemContainer>

            {/**
            <MarketItem />
            <MarketItem />
            <MarketItem />
            <MarketItem />
            <MarketItem />
            <MarketItem />
             */}
        </Grid>

    );
};

export default Marketplace;
