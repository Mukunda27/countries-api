import React, { useContext } from "react";
import { ThemeContext } from "../../theme-context";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setSearchInput } from "../../redux/searchSlice";
import { SearchGroup, Input, SearchIcon } from "./SearchInputStyles";

function SearchInput() {
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const theme = useContext(ThemeContext);

  const handleChange = (event) => {
    const search = event.target.value;
    dispatch(setSearchInput(search));
  };

  return (
    <SearchGroup theme={theme}>
      <SearchIcon theme={theme} />
      <Input
        theme={theme}
        value={search.searchInput}
        onChange={handleChange}
        type="search"
        placeholder="Search for a country.."
      />
    </SearchGroup>
  );
}

export default SearchInput;
