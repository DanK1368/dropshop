import React from "react";
import { Routes, Route } from "react-router-dom";
import BottomPicture from "./buyer/components/BottomPicture";
import ItemForSale from "./buyer/components/ItemForSale";
import ItemForSaleMirrored from "./buyer/components/ItemForSaleMirrored";
import ShopLinks from "./buyer/components/ShopLinks";
import SellerPage from "./seller/pages/SellerPage";
import Recomended from "./buyer/components/Recomended";

function App() {
  return (
    <div>
      <ItemForSaleMirrored />
      {/* <Routes> */}
        {/* <Route path="/" element={<SellerPage />} /> */}
      {/* </Routes> */}
      
    </div>
  );
}

export default App;
