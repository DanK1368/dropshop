import styled from "styled-components";

export const Page = styled.div`
    display:flex;
    flex-direction:row;
    width:30%; 
`
export const Columns = styled.div`
    display:grid;
    grid-template-columns: repeat(1, 1fr);
    gap:10px;
    color:white;
    background-color:#000112;
    padding:5px 10px;

    `