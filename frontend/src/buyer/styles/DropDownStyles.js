import styled from "styled-components";

export const DropDownContainer = styled.div`
    position: relative;

    z-index: 1;

    font-size: 14px;

    span {
        height: 25px;

        cursor: default;
    }

    span:hover .dropdown-content {
        display: block;
    }

    .dropdown-content {
        display: none;

        position: absolute;
        left: -30px;

        padding-top: 20px;

        background-color: black;

        z-index: 1;
    }

    button {
        height: 45px;
        padding: 0px 30px;

        text-align: left;

        cursor: pointer;

        .nav-link {
            font-size: 16px;
        }
    }

`