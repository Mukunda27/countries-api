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
  background-color: ${(props) =>
    props.theme === "light" ? "var(--light-grey)" : "var(--dark-blue-bg)"};
`;

export const SearchControls = styled.div`
  width: 100%;
  padding: 3.5rem 1.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const CountriesList = styled.div`
  padding: 0 1.5rem 3.5rem 1.5rem;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem 5rem;
`;

export const ButtonContainer = styled.div`
  padding: 3.5rem;
  display: flex;
  justify-content: center;
`;

export const LoadingIndicator = styled.div`
  width: 100%;
  font-weight: 700;
  text-align: center;
  font-size: 1.25rem;
  color: ${(props) =>
    props.theme === "light" ? "var(--dark-blue-text)" : "var(--white)"};
`;
