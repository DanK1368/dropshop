import React, { useEffect } from "react";
import MarketItem from "../components/MarketItem";
import { Grid } from "../styles/Marketplace";
import SearchBar from "../components/SearchBar";
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
    const dispatch = useDispatch();
    const {itemInventory, searchedItemsMarket} = useSelector(store => store.product)
    console.log(searchedItemsMarket)
    
    useEffect(() => {
        listAllItems(dispatch);
    }, [])

    return (

     <>
     <SearchBar />
        <Grid>
            {searchedItemsMarket.length === 0 ? 
            itemInventory.map(item => (
                <MarketItem key={item.id} {...item} />
            )) : 
            searchedItemsMarket.map(item => (
                <MarketItem key={item.id} {...item} />
            ))
            }

        </Grid>
    </>
    );
};

export default Marketplace;
