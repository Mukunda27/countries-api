import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

export const NavContainer = styled.nav`
  width: 100%;
  background-color: ${(props) =>
    props.theme === "light" ? "var(--white)" : "var(--dark-blue)"};
`;

export const Nav = styled.div`
  padding: 1.5rem;
  max-width: 1440px;
  margin: 0 auto;
  background-color: ${(props) =>
    props.theme === "light" ? "var(--white)" : "var(--dark-blue)"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 0;
`;

export const NavBarBrand = styled.span`
  font-size: 1.15rem;
  font-weight: 700;
  cursor: pointer;
  color: ${(props) =>
    props.theme === "light" ? "var(--dark-blue-text)" : "var(--white)"};

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Theme = styled.span`
  cursor: pointer;
`;

export const ThemeIcon = styled(FontAwesomeIcon).attrs((props) => ({
  icon: props.theme === "light" ? faMoon : faSun,
}))`
  color: ${(props) =>
    props.theme === "light" ? "var(--dark-blue-text)" : "var(--white)"};
`;

export const ThemeIndicator = styled.span`
  font-size: 0.8rem;
  margin-left: 0.5rem;
  color: ${(props) =>
    props.theme === "light" ? "var(--dark-blue-text)" : "var(--white)"};

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;
