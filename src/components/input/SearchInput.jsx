import React, { useState, useContext } from "react";
import { ThemeContext } from "../../theme-context";
import { SearchGroup, Input, SearchIcon } from "./SearchInputStyles";

function SearchInput() {
  const [search, setSearch] = useState("");

  const theme = useContext(ThemeContext);

  const handleChange = (event) => {
    setSearch(event.target.value);
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
