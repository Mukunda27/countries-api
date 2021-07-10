import React, { useState } from "react";

import CountryDetail from "./pages/country-detail/CountryDetail";
import CountriesHome from "./pages/countries-home/CountriesHome";

import { Switch, Route, Redirect } from "react-router-dom";

import { ThemeContext, defaultTheme } from "./theme-context";

function App() {
  const [theme, setTheme] = useState(defaultTheme);

  return (
    <ThemeContext.Provider value={theme}>
      <Switch>
        <Route path="/detail/:id">
          <CountryDetail setTheme={setTheme} />
        </Route>
        <Route exact path="/">
          <CountriesHome setTheme={setTheme} />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </ThemeContext.Provider>
  );
}

export default App;
