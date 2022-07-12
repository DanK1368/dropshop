import styled from "styled-components";

export const StyledSideBar = styled.div`
    display: flex;
    flex-direction: column;
    background: #2B2C37;
    width: 20%;
    height: 100vh;
    border-right: 0.5px solid #828FA3;
`

export const StyledSideHeader = styled.div`
    
    display: flex;
    padding-left: 15%;
    
    h1 {
        color: white;
    }

`

export const StyledSideBody = styled.div`
    display: flex;
`

export const StyledSideMenu = styled.ul`
display: flex;
flex-direction: column;
align-items: flex-start;

    button {
        color: white;
        padding: 5px;
        background: transparent;
        border: none;
        border-radius: 90px;
        font-weight: bold;


        :hover {
            background: #635fc7;
        }
    }

    button:nth-child(5) {
        background: transparent;
        border: none;
        color: #635fc7;

        :hover {
            color: white;
            background: #635fc7;
        }
    }

`