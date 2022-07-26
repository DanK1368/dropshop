import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemsSoldColumn from "./ItemsSoldColumn";
import SingleColumn from "./SingleColumn";

const InventoryColumn = () => {
  const { columns } = useSelector(store => store.columns);

  return (
    <>
      {columns.map(column => (
        <SingleColumn key={column.id} {...column} />
      ))}
      <ItemsSoldColumn />
    </>
  );
};

export default React.memo(InventoryColumn);
