import React, { useState, useContext, useCallback } from "react";
import debounce from "lodash/debounce";
import { ThemeContext } from "../../theme-context";
import { useDispatch } from "react-redux";
import { getCountriesAsyncByName } from "../../redux/countriesSlice";

import { SearchGroup, Input, SearchIcon } from "./SearchInputStyles";

function SearchInput() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const theme = useContext(ThemeContext);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedGetCountries = useCallback(
    debounce((name) => dispatch(getCountriesAsyncByName({ name })), 200),
    []
  );

  const handleChange = (event) => {
    const search = event.target.value;
    setSearch(search);
    debouncedGetCountries(search);
  };

  return (
    <SearchGroup theme={theme}>
      <SearchIcon theme={theme} />
      <Input
        theme={theme}
        value={search}
        onChange={handleChange}
        type="search"
        placeholder="Search for a country.."
      />
    </SearchGroup>
  );
}

export default SearchInput;
