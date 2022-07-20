import React, { useEffect } from "react";
import Header from "../components/BoardLayout/Header";
import { Main, Board, InnerPage } from "../styles/SellerPage";
import InventoryColumn from "../components/BoardLayout/DisplayBoard/Columns/InventoryColumn";
import { useDispatch, useSelector } from "react-redux";
import { listAllColumns } from "../../redux/columnApiCalls";

const SellerPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    listAllColumns(dispatch);
  }, []);

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
