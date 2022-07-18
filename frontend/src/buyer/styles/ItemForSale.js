import styled from "styled-components";

export const StyledWholeItem = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom:10%;

    img {
        width: 50%;
        border-radius: 10px;
        background: #f1f1f1;
    }
`

export const StyledDescriptionBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const StyledInnerDescriptionBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 75%;
`
