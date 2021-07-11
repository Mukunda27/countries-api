import React, { useContext } from "react";
import { ThemeContext } from "../../theme-context";

import {
  CardWrapper,
  CardImage,
  CountryDetails,
  CountryName,
  CountryInfo,
} from "./CountryCardStyles";

function CountryCard({ country }) {
  const theme = useContext(ThemeContext);

  return (
    <CardWrapper theme={theme}>
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
