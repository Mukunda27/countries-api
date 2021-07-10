import React, { useContext } from "react";
import { ThemeContext } from "../../theme-context";

import {
  Nav,
  NavBarBrand,
  ThemeIndicator,
  Theme,
  ThemeIcon,
} from "./NavbarStyles";

function NavBar({ setTheme }) {
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

  return (
    <Nav theme={theme}>
      <NavBarBrand theme={theme}> Where in the world ? </NavBarBrand>
      {themeSelection}
    </Nav>
  );
}

export default NavBar;
