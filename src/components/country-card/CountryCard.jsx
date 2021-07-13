import React, { useContext } from "react";
import { ThemeContext } from "../../theme-context";

import {
  CardWrapper,
  CardImage,
  CountryDetails,
  CountryName,
  CountryInfo,
} from "./CountryCardStyles";

function CountryCard({ country, history }) {
  const theme = useContext(ThemeContext);

  const showCountryDetails = () => {
    history.push(`./detail/${country.alpha3Code.toLowerCase()}`);
  };

  return (
    <CardWrapper onClick={showCountryDetails} theme={theme}>
      <CardImage src={country.flag} />
      <CountryDetails theme={theme}>
        <CountryName>{country.name}</CountryName>
        <CountryInfo> Population: {country.population} </CountryInfo>
        <CountryInfo>Region: {country.region}</CountryInfo>
        <CountryInfo>Capital: {country.capital || "??"}</CountryInfo>
      </CountryDetails>
    </CardWrapper>
  );
}

export default CountryCard;
