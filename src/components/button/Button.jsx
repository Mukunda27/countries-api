import React, { useContext } from "react";
import { ThemeContext } from "../../theme-context";

import { StyledBth } from "./ButtonStyles";

function Button(props) {
  const theme = useContext(ThemeContext);
  return (
    <StyledBth onClick={props.clicked} theme={theme}>
      {props.children}
    </StyledBth>
  );
}

export default Button;
