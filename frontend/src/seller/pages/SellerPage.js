import React, { useEffect } from "react";
import Header from "../components/BoardLayout/Header";
import { Main, Board, InnerPage } from "../styles/SellerPage";
import InventoryColumn from "../components/BoardLayout/DisplayBoard/Columns/InventoryColumn";
import { useDispatch, useSelector } from "react-redux";
import { listAllItems } from "../../redux/productApiCalls";

const SellerPage = () => {
  const { itemInventory } = useSelector(store => store.product);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   listAllItems(dispatch);
  // }, []);

  return (
    <Main>
      <Board>
        <Header />
        <InnerPage>
          <InventoryColumn />
        </InnerPage>
      </Board>
    </Main>
  );
};

export default React.memo(SellerPage);
