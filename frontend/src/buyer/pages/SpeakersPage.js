import React from "react";
import { SecondHeader, BottomComponent } from "../styles/HeadphonesPage";
import ShopLinks from "../components/ShopLinks";
import SpeakersZX9 from "../components/SpeakerForSale";
import ItemForSale from "../components/ItemForSale";
import SpeakersZX7 from "../components/SpeakerReverted";

const SpeakersPage = () => {
    return (
        <>
        <SecondHeader>
            <h1><span></span><br></br>SPEAKERS</h1>
        </SecondHeader>
        <SpeakersZX9/>
        <SpeakersZX7/>
        <BottomComponent>
            <ShopLinks/>
        </BottomComponent>
        
    </>
    )
}

export default SpeakersPage;