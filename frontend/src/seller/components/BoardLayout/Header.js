import React from 'react';
import { StyledHeader, AddButton } from '../../styles/Header';


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