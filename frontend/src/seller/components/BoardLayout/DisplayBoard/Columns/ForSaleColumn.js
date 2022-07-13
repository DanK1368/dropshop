import React, { useState } from "react";
import { Columns, Grid } from "../../../../styles/SellerColumns";
import { useDrop } from "react-dnd";

const ForSaleColumn = () => {
  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "productItem",
    drop: item => addItemToList(item.id),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addItemToList = itemId => {
    setBoard([]);
  };

  return (
    <Columns ref={drop}>
      <h4>For Sale</h4>
      <Grid></Grid>
    </Columns>
  );
};

export default ForSaleColumn;
