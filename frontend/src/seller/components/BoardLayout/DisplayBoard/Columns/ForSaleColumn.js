import React, { useState } from "react";
import { Columns, Grid } from "../../../../styles/SellerColumns";
import { useDrop } from "react-dnd";

const ForSaleColumn = () => {
  return (
    <Columns>
      <h4>For Sale</h4>
      <Grid></Grid>
    </Columns>
  );
};

export default ForSaleColumn;
