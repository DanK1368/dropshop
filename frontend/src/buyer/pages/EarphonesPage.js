import React from "react";
import { SecondHeader, BottomComponent } from "../styles/HeadphonesPage";
import ShopLinks from "../components/ShopLinks";
import Earphones from "../components/EarphonesForSale";
import { useSelector } from "react-redux";

const EarphonesPage = () => {
  return (
    <>
      <SecondHeader>
        <h1>
          <br></br>EARPHONES
        </h1>
      </SecondHeader>
      <Earphones />
      <BottomComponent>
        <ShopLinks />
      </BottomComponent>
    </>
  );
};

export default EarphonesPage;
