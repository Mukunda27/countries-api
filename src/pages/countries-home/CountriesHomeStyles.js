import styled from "styled-components";

export const CountriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const CountriesList = styled.div`
  padding: 3.5rem;
  flex-grow: 1;
  background-color: ${(props) =>
    props.theme === "light" ? "var(--light-grey)" : "var(--dark-blue-bg)"};
`;
