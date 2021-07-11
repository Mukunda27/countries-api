import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  background-color: ${(props) =>
    props.theme === "light" ? "var(--white)" : "var(--dark-blue)"};
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  object-position: center center;
`;

export const CountryDetails = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${(props) =>
    props.theme === "light" ? "var(--dark-blue-text)" : "var(--white)"};
`;

export const CountryName = styled.span`
  margin: 1rem;
  font-size: 1.25rem;
  font-weight: 700;
`;

export const CountryInfo = styled.span`
  margin: 0.25rem 1rem;
`;
