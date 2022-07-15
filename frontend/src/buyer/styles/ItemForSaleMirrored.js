import styled from "styled-components";

export const StyledWholeItem = styled.div`
    display: flex;
    flex-direction: row;

    img {
        width: 50%;
        border-radius: 10px;
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
