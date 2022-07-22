import React, { useEffect } from "react";
import MarketItem from "../components/MarketItem";
import { Grid } from "../styles/Marketplace";
import { useDispatch, useSelector } from "react-redux";
import { listAllItems } from "../../redux/productApiCalls";

const Marketplace = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        listAllItems(dispatch);
    }, []);

    const { itemInventory } = useSelector(store => store.product);

    return (

        <Grid>
            {itemInventory.map((item) => (
                <MarketItem key={itemInventory.id} {...itemInventory} item={item} />
            ))}
            <MarketItem />
            <MarketItem />
            <MarketItem />
            <MarketItem />
            <MarketItem />
            <MarketItem />

        </Grid>

    );
};

export default Marketplace;
