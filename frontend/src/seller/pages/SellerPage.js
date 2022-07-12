import React from "react";
import SideBoard from "../components/BoardLayout/SideBoard";
import Header from "../components/BoardLayout/Header";
import { Main, Board, InnerPage } from "../styles/SellerPage";

const SellerPage = () => {
    return (
        <Main>
            <SideBoard/>
            <Board>
                <Header/>
                <InnerPage/>
            </Board>
            
            
            
        </Main>

    )
}


export default SellerPage;