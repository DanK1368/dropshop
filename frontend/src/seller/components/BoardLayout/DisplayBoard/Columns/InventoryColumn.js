import React, { useEffect, useState } from "react";
import { Columns, Grid } from "../../../../styles/SellerColumns";
import SingleItem from "../Items/SingleItem";
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { ADD_ITEM_TO_COLUMN } from "../../../../../redux/productSlice";
import SingleColumn from "./SingleColumn";

const InventoryColumn = () => {
  const dispatch = useDispatch();
  const { columns } = useSelector(store => store.columns);

  return (
    <>
      {columns.map(column => (
        <SingleColumn key={column.id} {...column} />
      ))}
    </>
  );
};

export default React.memo(InventoryColumn);
