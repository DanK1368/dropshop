import React from "react";
import { SecondHeader, BottomComponent } from "../styles/HeadphonesPage";
import ShopLinks from "../components/ShopLinks";
import SpeakersZX9 from "../components/SpeakerForSale";
import ItemForSale from "../components/ItemForSale";

const SpeakersPage = () => {
    return (
        <>
        <SecondHeader>
            <h1><span></span><br></br>SPEAKERS</h1>
        </SecondHeader>
        <ItemForSale/>
        {/* <ItemForSaleMirrored/> */}
        {/* <ItemForSale/> */}
        <SpeakersZX9/>
        <BottomComponent>
            <ShopLinks/>
        </BottomComponent>
        
    </>
    )
}

export default SpeakersPage;