import React, { useContext } from "react";
import NavBar from "../../components/navbar/NavBar";
import SearchInput from "../../components/input/SearchInput";
import { ThemeContext } from "../../theme-context";

import { CountriesContainer, CountriesList } from "./CountriesHomeStyles";
import Dropdown from "../../components/dropdown/Dropdown";

function CountriesHome({ setTheme }) {
  const theme = useContext(ThemeContext);
  return (
    <CountriesContainer>
      <NavBar setTheme={setTheme} />
      <CountriesList theme={theme}>
        <SearchInput />
        <Dropdown />
      </CountriesList>
    </CountriesContainer>
  );
}

export default CountriesHome;
