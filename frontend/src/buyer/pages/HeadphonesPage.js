import React, { useEffect } from "react";
import ItemForSale from "../components/ItemForSale";
import ItemForSaleMirrored from "../components/ItemForSaleMirrored";
import ShopLinks from "../components/ShopLinks";
import { BottomComponent, SecondHeader } from "../styles/HeadphonesPage";
import { useDispatch, useSelector } from "react-redux";
import { listAllItems } from "../../redux/productApiCalls";

const HeadphonesPage = () => {
  const dispatch = useDispatch();

  // this will fetch all the items from the database on pageload
  // or everytime the page renders
  useEffect(() => {
    listAllItems(dispatch);
  }, []);

  const { itemInventory } = useSelector(store => store.product);

  // we are filtering the entire inventory to display items of a specific category
  const headphones = itemInventory.filter(
    item => item.category === "Headphones"
  );

  return (
    <>
      <SecondHeader>
        <h1>
          <span></span>
          <br></br>HEADPHONES
        </h1>
      </SecondHeader>
      {headphones.map((headphone, idx) => (
        <ItemForSale key={headphone.id} {...headphone} idx={idx} />
      ))}

      {/* <ItemForSaleMirrored />
      <ItemForSale /> */}
      <BottomComponent>
        <ShopLinks />
      </BottomComponent>
    </>
  );
};
export default HeadphonesPage;
