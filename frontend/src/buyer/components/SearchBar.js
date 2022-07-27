import React, { useState } from "react";
import { SearchBarContainer } from "../styles/SearchBarContainer";
import { NavLink } from "react-router-dom";
import { searchItems } from "../../redux/productApiCalls";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = e => {
    e.preventDefault();
    searchItems(searchValue, dispatch);
  };

  return (
    <SearchBarContainer>
      <input
        type="text"
        placeholder="Search.."
        name="search"
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
      ></input>
      <button onClick={e => handleSearch(e)}>Search</button>
    </SearchBarContainer>
  );
};

export default SearchBar;
