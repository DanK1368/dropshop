import React from "react";
import SideBoard from "../components/BoardLayout/SideBoard";
import Header from "../components/BoardLayout/Header";
import { Main, Board, InnerPage } from "../styles/SellerPage";
import InventoryColumn from "../components/BoardLayout/DisplayBoard/Columns/InventoryColumn";
import ForSaleColumn from "../components/BoardLayout/DisplayBoard/Columns/ForSaleColumn";
import DiscountColumn from "../components/BoardLayout/DisplayBoard/Columns/DiscountColumn";

const SellerPage = () => {
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

export default SellerPage;