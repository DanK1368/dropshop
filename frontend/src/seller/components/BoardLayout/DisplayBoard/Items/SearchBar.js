import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledSearchBar } from "../../../../styles/SellerColumns";
import { SEARCH_ITEMS } from "../../../../../redux/productSlice";

const SearchBar = ({ columnTitle }) => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const { searchedItems } = useSelector(store => store.product);

  return (
    <>
      <StyledSearchBar htmlFor="search">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search items..."
          value={searchValue}
          onChange={e => {
            setSearchValue(e.target.value.trim().toLocaleLowerCase());
            dispatch(
              SEARCH_ITEMS({
                searchTerm: searchValue,
                columnTitle: columnTitle,
              })
            );
          }}
        />
      </StyledSearchBar>
    </>
  );
};
export default SearchBar;
