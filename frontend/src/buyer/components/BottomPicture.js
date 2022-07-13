import React from "react";
import {Main, LeftText} from "../styles/BottomPicture";
import HeadphonesGuy from "../../assets/shared/desktop/image-best-gear.jpg";

const BottomPicture = () => {
    return (
        <Main>
            <LeftText>
                <h3>BRINGING YOU THE <br></br><span>BEST</span> AUDIO GEAR</h3>
                <p>Located at the heart of Zürich, DropShop is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make DropShop the best place to buy your portable audio equipment.</p>
            </LeftText>            
            <img src={HeadphonesGuy}/>
        </Main>
    )
}

export default BottomPicture;
