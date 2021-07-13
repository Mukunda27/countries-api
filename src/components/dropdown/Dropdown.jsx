import React, { useState, useContext } from "react";
import { ThemeContext } from "../../theme-context";
import { useDispatch } from "react-redux";

import {
  SelectGroup,
  ChevronIcon,
  CustomSelect,
  SelectOptionsContainer,
  SelectOption,
} from "./DropdownStyles";

import { getCountriesAsyncByRegion } from "../../redux/countriesSlice";

const options = [
  { id: "0", text: "Africa", value: "africa" },
  { id: "1", text: "America", value: "americas" },
  { id: "2", text: "Asia", value: "asia" },
  { id: "3", text: "Europe", value: "europe" },
  { id: "4", text: "Oceania", value: "oceania" },
];

function Dropdown() {
  const [filter, setFilter] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const dispatch = useDispatch();

  const filterSelected = (filter) => {
    dispatch(getCountriesAsyncByRegion({ region: filter.value }));
    setFilter(filter.text);
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
                onClick={filterSelected.bind(null, op)}
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
