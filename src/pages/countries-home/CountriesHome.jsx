import React, { useState, useContext, useEffect } from "react";
import NavBar from "../../components/navbar/NavBar";
import SearchInput from "../../components/input/SearchInput";
import CountryCard from "../../components/country-card/CountryCard";
import { ThemeContext } from "../../theme-context";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  getCountriesAsync,
  getCountriesAsyncByName,
  getCountriesAsyncByRegion,
  getCountriesAsyncByRegionAndName,
} from "../../redux/countriesSlice";
import { withRouter } from "react-router-dom";

import {
  OuterContainer,
  CountriesContainer,
  ResultContainer,
  SearchControls,
  CountriesList,
  ButtonContainer,
  LoadingIndicator,
} from "./CountriesHomeStyles";
import Dropdown from "../../components/dropdown/Dropdown";
import Button from "../../components/button/Button";

function CountriesHome({ setTheme, history }) {
  const [countriesShown, setcountriesShown] = useState(8);
  const displatch = useDispatch();
  let countries = useSelector((state) => state.countries);
  const search = useSelector((state) => state.search);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    if (search.searchInput && search.categoryFilter) {
      if (search.categoryFilter === "all") {
        displatch(getCountriesAsyncByName({ name: search.searchInput }));
      } else {
        displatch(
          getCountriesAsyncByRegionAndName({
            name: search.searchInput,
            region: search.categoryFilter,
          })
        );
      }
    } else if (search.categoryFilter === "all") {
      displatch(getCountriesAsync());
    } else if (search.categoryFilter) {
      displatch(getCountriesAsyncByRegion({ region: search.categoryFilter }));
    } else if (search.searchInput) {
      displatch(getCountriesAsyncByName({ name: search.searchInput }));
    } else {
      displatch(getCountriesAsync());
    }
  }, [search, displatch]);

  useEffect(() => {
    setcountriesShown(8);
  }, [countries]);

  const showMoreCountries = () => {
    setcountriesShown((state) => state + 8);
  };

  let sortedCountries = [...countries];
  sortedCountries.sort((a, b) => b.population - a.population);

  let countriesCards = sortedCountries.length
    ? sortedCountries
        .slice(0, countriesShown)
        .map((ctry) => (
          <CountryCard key={ctry.alpha3Code} country={ctry} history={history} />
        ))
    : null;

  const loading = !countries.length ? (
    <LoadingIndicator theme={theme}>Loading..</LoadingIndicator>
  ) : null;

  const showMoreBtn =
    countriesShown < sortedCountries.length ? (
      <ButtonContainer>
        <Button clicked={showMoreCountries}> Show More </Button>
      </ButtonContainer>
    ) : null;

  return (
    <CountriesContainer>
      <NavBar history={history} setTheme={setTheme} />
      <OuterContainer theme={theme}>
        <ResultContainer theme={theme}>
          <SearchControls>
            <SearchInput />
            <Dropdown />
          </SearchControls>
          <CountriesList>{countriesCards}</CountriesList>
          {loading}
          {showMoreBtn}
        </ResultContainer>
      </OuterContainer>
    </CountriesContainer>
  );
}

export default withRouter(CountriesHome);
