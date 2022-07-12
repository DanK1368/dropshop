import React from "react";
import { 
    StyledSideBar,
    StyledSideHeader,
    StyledSideBody,
    StyledSideMenu,
} from "../../styles/SideBoard";



const SideBoard = () => {
    return (
        <>
            <StyledSideBar>
                <StyledSideHeader>
                    <h1>DropShop</h1>
                </StyledSideHeader>
                <StyledSideBody>
                    <StyledSideMenu>
                        <button>Inventory Column</button>
                        <button>On Sale Column</button>
                        <button>10% Column</button>
                        <button>25% Column</button>
                        <button>Create New Column</button>
                    </StyledSideMenu>
                </StyledSideBody>
            </StyledSideBar>
        </>
    );
};

export default SideBoard;
