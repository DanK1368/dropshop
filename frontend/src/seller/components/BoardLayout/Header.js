import React from 'react';
import styled from "styled-components";

export const StyledHeader = styled.div`
    width: 80%;
    height:10%;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content: space-between;
    padding: 0px 15px;    
    background-color:#2B2C37;

    h3{
        color: white;
    }
    `

export const AddButton = styled.button`
    //width:13%;
    //height:70%;
    padding: 10px 15px;
    color:white;
    border:none;
    border-radius:90px;
    background-color:#635fc7;
    
    `
// still needs to be added functionality to the buttton
const Header = () => {
    return (
        <StyledHeader>
            <h3>Platform Launch</h3>
            <AddButton>+Add New Item</AddButton>
        </StyledHeader>
    )
}


export default Header;