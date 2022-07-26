import React from "react";
import { SearchBarContainer } from "../styles/SearchBarContainer";
import { NavLink } from "react-router-dom";

const SearchBar = () => {

    return (
        <SearchBarContainer>
            <input type="text" placeholder="Search.." name="search"></input>
            <button>Submit</button>
        </SearchBarContainer>

    )
}

export default SearchBar
