import styled from "styled-components";

export const CountriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const OuterContainer = styled.div`
  flex-grow: 1;
  width: 100%;
  background-color: ${(props) =>
    props.theme === "light" ? "var(--light-grey)" : "var(--dark-blue-bg)"};
`;

export const ResultContainer = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  padding: 3.5rem 1.5rem;

  background-color: ${(props) =>
    props.theme === "light" ? "var(--light-grey)" : "var(--dark-blue-bg)"};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: start;
  margin-bottom: 3.5rem;
`;

export const DetailsWrapper = styled.div`
  display: grid;
  grid-template-rows: auto;
  row-gap: 2rem;
  column-gap: 8rem;
  place-items: center;

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const CountryImg = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: center center;

  @media (min-width: 768px) {
    height: 350px;
  }

  @media (min-width: 992px) {
    height: 425px;
  }

  @media (min-width: 1200px) {
    height: 475px;
  }
`;

export const CountryInfSection = styled.div`
  padding: 0;
  display: flex;
  place-self: start;
  flex-wrap: wrap;
  flex-direction: column;
  color: ${(props) =>
    props.theme === "light" ? "var(--dark-blue-text)" : "var(--white)"};

  @media (min-width: 1200px) {
    padding: 2rem 0;
    place-self: center;
    flex-direction: row;
  }
`;

export const CountryName = styled.span`
  font-size: 1.75rem;
  font-weight: 700;
  flex-basis: 100%;
`;

export const CountryInfoSubSection = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
`;

export const BorderInfoSubSection = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
`;

export const BorderTitle = styled.div`
  flex-basis: 100%;

  @media (min-width: 1200px) {
    flex-basis: auto;
  }
`;

export const CountryInfo = styled.span`
  margin: 0.25rem 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  row-gap: 1rem;
  column-gap: 1rem;
  align-items: center;
`;

export const LoadingIndicator = styled.div`
  width: 100%;
  font-weight: 700;
  text-align: center;
  font-size: 1.25rem;
  color: ${(props) =>
    props.theme === "light" ? "var(--dark-blue-text)" : "var(--white)"};
`;
