import React, { useEffect } from "react";
import { SecondHeader, BottomComponent } from "../styles/HeadphonesPage";
import ShopLinks from "../components/ShopLinks";
import Earphones from "../components/EarphonesForSale";
import { useDispatch, useSelector } from "react-redux";
import { listAllItems } from "../../redux/productApiCalls";

const EarphonesPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    listAllItems(dispatch);
  }, []);

  const { itemInventory } = useSelector(store => store.product);
  const earphones = itemInventory.filter(item => item.category === "Earphones");

  return (
    <>
      <SecondHeader>
        <h1>
          <br></br>EARPHONES
        </h1>
      </SecondHeader>

      {earphones.map((earphone, idx) => (
        <Earphones key={earphone.id} {...earphone} idx={idx} />
      ))}

      <BottomComponent>
        <ShopLinks />
      </BottomComponent>
    </>
  );
};

export default EarphonesPage;
