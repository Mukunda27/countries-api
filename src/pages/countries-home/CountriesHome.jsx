import React, { useState, useContext, useEffect } from "react";
import NavBar from "../../components/navbar/NavBar";
import SearchInput from "../../components/input/SearchInput";
import CountryCard from "../../components/country-card/CountryCard";
import { ThemeContext } from "../../theme-context";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCountriesAsync } from "../../redux/countriesSlice";

import {
  CountriesContainer,
  ResultContainer,
  SearchControls,
  CountriesList,
  ButtonContainer,
} from "./CountriesHomeStyles";
import Dropdown from "../../components/dropdown/Dropdown";
import Button from "../../components/button/Button";

function CountriesHome({ setTheme }) {
  const [countriesShown, setcountriesShown] = useState(10);
  const displatch = useDispatch();
  let countries = useSelector((state) => state.countries);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    displatch(getCountriesAsync());
  }, [displatch]);

  useEffect(() => {
    setcountriesShown(10);
  }, [countries]);

  const showMoreCountries = () => {
    setcountriesShown((state) => state + 10);
  };

  let sortedCountries = [...countries];
  sortedCountries.sort((a, b) => b.population - a.population);

  let countriesCards = sortedCountries.length ? (
    sortedCountries
      .slice(0, countriesShown)
      .map((ctry) => <CountryCard key={ctry.alpha3Code} country={ctry} />)
  ) : (
    <h2>Loading..</h2>
  );

  const showMoreBtn =
    countriesShown < sortedCountries.length ? (
      <ButtonContainer>
        <Button clicked={showMoreCountries}> Show More </Button>
      </ButtonContainer>
    ) : null;

  return (
    <CountriesContainer>
      <NavBar setTheme={setTheme} />
      <ResultContainer theme={theme}>
        <SearchControls>
          <SearchInput />
          <Dropdown />
        </SearchControls>
        <CountriesList>{countriesCards}</CountriesList>
        {showMoreBtn}
      </ResultContainer>
    </CountriesContainer>
  );
}

export default CountriesHome;
