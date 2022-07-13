import React from "react";
import {Page, Columns} from "../../../../styles/SellerColumns";
import SingleItem from "../Items/SingleItem";

const InventoryColumn = () => {
    return(
        <Page>
            <Columns>
                <h4>Inventory</h4>
                <SingleItem/>
                <SingleItem/>
                <SingleItem/>
                <SingleItem/>            
            </Columns>
        </Page>
    )
}

export default InventoryColumn;
