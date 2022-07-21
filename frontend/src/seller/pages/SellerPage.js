import React, { useEffect } from "react";
import Header from "../components/BoardLayout/Header";
import { Main, Board, InnerPage } from "../styles/SellerPage";
import InventoryColumn from "../components/BoardLayout/DisplayBoard/Columns/InventoryColumn";
import { useDispatch, useSelector } from "react-redux";
import { listAllColumns } from "../../redux/columnApiCalls";
import { listAllItems } from "../../redux/productApiCalls";
import ItemDetails from "../components/BoardLayout/DisplayBoard/Items/ItemDetails";

const SellerPage = () => {
  const dispatch = useDispatch();
  const { showItemDetails, itemToBeUpdatedId } = useSelector(
    store => store.product
  );

  useEffect(() => {
    listAllColumns(dispatch);
    listAllItems(dispatch);
  }, []);

  return (
    <Main>
      <Board>
        <Header />
        <InnerPage>
          <InventoryColumn />
          {showItemDetails && <ItemDetails id={itemToBeUpdatedId} />}
        </InnerPage>
      </Board>
    </Main>
  );
};

export default SellerPage;
