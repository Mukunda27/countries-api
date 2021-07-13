import React, { useState, useContext, useEffect, useCallback } from "react";
import NavBar from "../../components/navbar/NavBar";
import Button from "../../components/button/Button";
import { ThemeContext } from "../../theme-context";
import { withRouter, useParams } from "react-router-dom";

import { ALL_COUNTRIES_API_BY_CODEE } from "../../api-endpoint";

import {
  OuterContainer,
  CountriesContainer,
  ResultContainer,
  ButtonContainer,
  DetailsWrapper,
  CountryImg,
  CountryInfSection,
  BorderInfoSubSection,
  BorderTitle,
  CountryName,
  CountryInfo,
  CountryInfoSubSection,
  LoadingIndicator,
} from "./CountryDetailStyles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

function CountryDetail({ setTheme, history }) {
  const theme = useContext(ThemeContext);
  const params = useParams();
  const [country, setCountry] = useState(null);
  const [borders, setBorders] = useState([]);

  const fetchCountry = useCallback(async () => {
    if (params.id) {
      const response = await fetch(`${ALL_COUNTRIES_API_BY_CODEE}${params.id}`);
      if (response.ok) {
        const country = await response.json();
        const borderCodes = country.borders.join(";");

        const borderRes = await fetch(
          `${ALL_COUNTRIES_API_BY_CODEE}?codes=${borderCodes}`
        );
        if (borderRes.ok) {
          const borderCountries = await borderRes.json();
          setBorders(borderCountries);
        }

        return country;
      }
    }
  }, [params]);

  useEffect(() => {
    fetchCountry().then((res) => {
      setCountry(res);
    });
  }, [fetchCountry]);

  const navigateToResults = () => {
    history.goBack();
  };

  const showCountryDetails = (ctry) => {
    setCountry(null);
    history.push(`/detail/${ctry.toLowerCase()}`);
  };

  const bordersSection = borders ? (
    <BorderInfoSubSection>
      <CountryInfo>
        <BorderTitle>
          <strong>Borders Countries:</strong>
        </BorderTitle>
        {borders.slice(0, 3).map((border) => (
          <Button
            clicked={showCountryDetails.bind(null, border.alpha3Code)}
            key={border.alpha3Code}
          >
            {border.name}
          </Button>
        ))}
      </CountryInfo>
    </BorderInfoSubSection>
  ) : null;

  const countryInfo = country ? (
    <DetailsWrapper>
      <CountryImg src={country.flag} />
      <CountryInfSection theme={theme}>
        <CountryName>{country.name}</CountryName>
        <CountryInfoSubSection>
          <CountryInfo>
            <strong>Native Name:</strong>
            {country.nativeName}
          </CountryInfo>
          <CountryInfo>
            <strong>Population:</strong>
            {country.population}
          </CountryInfo>
          <CountryInfo>
            <strong>Region:</strong>
            {country.region}
          </CountryInfo>
          <CountryInfo>
            <strong>Sub Region:</strong>
            {country.subregion}
          </CountryInfo>
          <CountryInfo>
            <strong>Capital:</strong>
            {country.capital}
          </CountryInfo>
        </CountryInfoSubSection>
        <CountryInfoSubSection>
          <CountryInfo>
            <strong>Top Level Domain:</strong>
            {country.topLevelDomain.join(", ")}
          </CountryInfo>
          <CountryInfo>
            <strong>Currencies:</strong>
            {country.currencies.map((cur) => cur.code).join(", ")}
          </CountryInfo>
          <CountryInfo>
            <strong>Languages:</strong>
            {country.languages.map((lan) => lan.name).join(", ")}
          </CountryInfo>
        </CountryInfoSubSection>
        {bordersSection}
      </CountryInfSection>
    </DetailsWrapper>
  ) : null;

  const loading = !country ? (
    <LoadingIndicator theme={theme}>Loading..</LoadingIndicator>
  ) : null;

  return (
    <CountriesContainer>
      <NavBar history={history} setTheme={setTheme} />
      <OuterContainer theme={theme}>
        <ResultContainer theme={theme}>
          <ButtonContainer>
            <Button clicked={navigateToResults}>
              <FontAwesomeIcon icon={faChevronLeft} /> Back
            </Button>
          </ButtonContainer>
          {countryInfo}
          {loading}
        </ResultContainer>
      </OuterContainer>
    </CountriesContainer>
  );
}

export default withRouter(CountryDetail);
