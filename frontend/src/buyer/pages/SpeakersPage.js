import React, { useEffect } from "react";
import { SecondHeader, BottomComponent } from "../styles/HeadphonesPage";
import ShopLinks from "../components/ShopLinks";
import SpeakersZX9 from "../components/SpeakerForSale";
import ItemForSale from "../components/ItemForSale";
import SpeakersZX7 from "../components/SpeakerReverted";
import { useDispatch, useSelector } from "react-redux";
import { listAllItems } from "../../redux/productApiCalls";

const SpeakersPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    listAllItems(dispatch);
  }, []);

  const { itemInventory } = useSelector(store => store.product);
  const speakers = itemInventory.filter(item => item.category === "Speakers");
  return (
    <>
      <SecondHeader>
        <h1>
          <span></span>
          <br></br>SPEAKERS
        </h1>
      </SecondHeader>
      {speakers.map((speaker, idx) => (
        <SpeakersZX9 key={speaker.id} {...speaker} idx={idx} />
      ))}

      {/* <SpeakersZX7/> */}
      <BottomComponent>
        <ShopLinks />
      </BottomComponent>
    </>
  );
};

export default SpeakersPage;
