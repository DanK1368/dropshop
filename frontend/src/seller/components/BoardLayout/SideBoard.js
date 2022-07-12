import React from "react";
import styled from "styled-components";

const StyledSideBar = styled.div`
    display: flex;
    flex-direction: column;
    background: #3E3F4E;
    width: 20%;
    height: 100vh;
`

const StyledSideHeader = styled.div`
    
`

const StyledSideBody = styled.div`

`

const StyledSideMenu = styled.div`

`

const SideBoard = () => {
    return (
        <>
            <StyledSideBar>
                <StyledSideHeader>
                    <h1>DropShop</h1>
                </StyledSideHeader>
                <StyledSideBody>
                    <StyledSideMenu>

                    </StyledSideMenu>
                </StyledSideBody>
            </StyledSideBar>
        </>
    );
};

export default SideBoard;
