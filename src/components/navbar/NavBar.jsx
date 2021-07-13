import React, { useContext } from "react";
import { ThemeContext } from "../../theme-context";

import {
  NavContainer,
  Nav,
  NavBarBrand,
  ThemeIndicator,
  Theme,
  ThemeIcon,
} from "./NavbarStyles";

function NavBar({ setTheme, history }) {
  const theme = useContext(ThemeContext);
  const themeSelection =
    theme === "light" ? (
      <Theme
        onClick={() => {
          setTheme("dark");
        }}
      >
        <ThemeIcon theme={theme} />
        <ThemeIndicator theme={theme}>Dark Mode</ThemeIndicator>
      </Theme>
    ) : (
      <Theme
        onClick={() => {
          setTheme("light");
        }}
      >
        <ThemeIcon theme={theme} />
        <ThemeIndicator theme={theme}> Light Mode</ThemeIndicator>
      </Theme>
    );

  const navigateToHome = () => {
    history.push("/");
  };

  return (
    <NavContainer theme={theme}>
      <Nav theme={theme}>
        <NavBarBrand onClick={navigateToHome} theme={theme}>
          {" "}
          Where in the world ?{" "}
        </NavBarBrand>
        {themeSelection}
      </Nav>
    </NavContainer>
  );
}

export default NavBar;
