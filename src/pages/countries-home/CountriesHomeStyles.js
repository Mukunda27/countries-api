import styled from "styled-components";

export const CountriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const ResultContainer = styled.div`
  flex-grow: 1;
  background-color: ${(props) =>
    props.theme === "light" ? "var(--light-grey)" : "var(--dark-blue-bg)"};
`;

export const SearchControls = styled.div`
  width: 100%;
  padding: 3.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const CountriesList = styled.div`
  padding: 3.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem 5rem;
`;

export const ButtonContainer = styled.div`
  padding: 3.5rem;
  display: flex;
  justify-content: center;
`;
