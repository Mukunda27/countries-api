import React, { useState, useContext } from "react";
import { ThemeContext } from "../../theme-context";

import {
  SelectGroup,
  ChevronIcon,
  CustomSelect,
  SelectOptionsContainer,
  SelectOption,
} from "./DropdownStyles";

const options = [
  { id: "0", text: "Africa" },
  { id: "1", text: "America" },
  { id: "2", text: "Asia" },
  { id: "3", text: "Europe" },
  { id: "4", text: "Oceania" },
];

function Dropdown() {
  const [filter, setFilter] = useState("");
  const [showOptions, setShowOptions] = useState(false);

  const filterSelected = (value) => {
    setFilter(value);
  };

  const showFilterOptions = () => {
    setShowOptions((state) => {
      return !state;
    });
  };

  const theme = useContext(ThemeContext);
  return (
    <SelectGroup theme={theme} onClick={showFilterOptions}>
      <CustomSelect theme={theme}>
        {filter || "Filter by categpry"}
        {showOptions && (
          <SelectOptionsContainer theme={theme}>
            {options.map((op) => (
              <SelectOption
                key={op.id}
                onClick={filterSelected.bind(null, op.text)}
                theme={theme}
              >
                {op.text}
              </SelectOption>
            ))}
          </SelectOptionsContainer>
        )}
      </CustomSelect>
      <ChevronIcon theme={theme} />
    </SelectGroup>
  );
}

export default Dropdown;
