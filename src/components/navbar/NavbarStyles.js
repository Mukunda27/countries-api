import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

export const Nav = styled.nav`
  padding: 1.5rem 3.5rem;
  background-color: ${(props) =>
    props.theme === "light" ? "var(--white)" : "var(--dark-blue)"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 0;
`;

export const NavBarBrand = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(props) =>
    props.theme === "light" ? "var(--dark-blue-text)" : "var(--white)"};
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
  font-size: 1rem;
  margin-left: 0.5rem;
  color: ${(props) =>
    props.theme === "light" ? "var(--dark-blue-text)" : "var(--white)"};
`;
