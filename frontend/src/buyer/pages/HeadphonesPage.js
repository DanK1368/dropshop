import React from "react";
import ItemForSale from "../components/ItemForSale";
import ItemForSaleMirrored from "../components/ItemForSaleMirrored";
import ShopLinks from "../components/ShopLinks";
import {BottomComponent, SecondHeader} from "../styles/HeadphonesPage";

const HeadphonesPage = () => {
    return (
        <>
            <SecondHeader>
                <h1><span></span><br></br>HEADPHONES</h1>
            </SecondHeader>
            <ItemForSale/>
            <ItemForSaleMirrored/>
            <ItemForSale/>
            <BottomComponent>
                <ShopLinks/>
            </BottomComponent>
            
        </>
    )
}
export default HeadphonesPage;