import React from "react";
import styled from "styled-components";

const StyledSideBar = styled.div`
    display: flex;
    flex-direction: column;
    background: #2B2C37;
    width: 20%;
    height: 100vh;
    border: 0.5px solid #828FA3;
`

const StyledSideHeader = styled.div`
    
    display: flex;
    padding-left: 15%;
    
    h1 {
        color: white;
    }

`

const StyledSideBody = styled.div`
    display: flex;
`

const StyledSideMenu = styled.ul`
display: flex;
flex-direction: column;

    h5 {
        color: white;
    }
    
    

`

const StyledAddButton = styled.button`
background: transparent;
border: none;
color: white;
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
                        <h5>Inventory Column</h5>
                        <h5>On Sale Column</h5>
                        <h5>25% Column</h5>
                        <h5>33% Column</h5>
                        <StyledAddButton>
                            <h4>Create New Column</h4>
                        </StyledAddButton>
                    </StyledSideMenu>
                </StyledSideBody>
            </StyledSideBar>
        </>
    );
};

export default SideBoard;
