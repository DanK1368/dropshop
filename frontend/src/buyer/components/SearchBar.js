import React, { useState } from "react";
import { SearchBarContainer } from "../styles/SearchBarContainer";
import { NavLink } from "react-router-dom";

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState("")
    console.log(searchValue)

    return (
        <SearchBarContainer>
            <input type="text" placeholder="Search.." name="search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} ></input>
            <button>Submit</button>
        </SearchBarContainer>

    )
}

export default SearchBar
