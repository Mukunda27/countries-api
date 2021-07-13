import React, { useState, useContext } from "react";
import { ThemeContext } from "../../theme-context";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setCategoryFilter } from "../../redux/searchSlice";

import {
  SelectGroup,
  ChevronIcon,
  CustomSelect,
  SelectOptionsContainer,
  SelectOption,
} from "./DropdownStyles";

const options = [
  { id: "0", text: "All", value: "all" },
  { id: "1", text: "Africa", value: "africa" },
  { id: "2", text: "Americas", value: "americas" },
  { id: "3", text: "Asia", value: "asia" },
  { id: "4", text: "Europe", value: "europe" },
  { id: "5", text: "Oceania", value: "oceania" },
];

function Dropdown() {
  const filter = useSelector((state) => state.search).categoryFilter;
  const [showOptions, setShowOptions] = useState(false);
  const dispatch = useDispatch();

  const filterSelected = (filter) => {
    dispatch(setCategoryFilter(filter.value));
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
        {filter
          ? filter[0].toUpperCase().concat(filter.slice(1))
          : "Filter by categpry"}
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
