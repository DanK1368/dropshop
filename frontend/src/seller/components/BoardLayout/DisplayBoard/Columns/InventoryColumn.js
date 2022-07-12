import React from "react";
import styled from "styled-components";

const Page = styled.div`
    display:flex;
    flex-direction:row;
    width:vw;
    height:100vh; 
`
const Columns = styled.div`
    width:20%;
    height: 100%;
    display:grid;
    grid-template-columns: repeat(1, 1fr);
    //grid:;
    //gap:;
    color:white;
    background-color:#000112;
    padding:5px 10px;

    `
const InventoryColumn = () => {
    return(
        <Page>
        <Columns><h4>Inventory</h4></Columns>
        </Page>
    )
}

export default InventoryColumn;
