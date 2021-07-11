import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export const SelectGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 50%;
  margin: 1rem 0;
  position: relative;
  padding-right: 1rem;
  border-radius: 8px;

  cursor: pointer;
  background-color: ${(props) =>
    props.theme === "light" ? "var(--white)" : "var(--dark-blue)"};

  @media (min-width: 768px) {
    flex-basis: 25%;
  }
`;

export const CustomSelect = styled.div`
  background-color: ${(props) =>
    props.theme === "light" ? "var(--white)" : "var(--dark-blue)"};
  color: ${(props) =>
    props.theme === "light" ? "var(--dark-blue-text)" : "var(--white)"};
  font-size: 1rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: none;
  outline: none;
  flex-grow: 1;
`;

export const ChevronIcon = styled(FontAwesomeIcon).attrs(() => ({
  icon: faChevronDown,
}))`
  color: ${(props) =>
    props.theme === "light" ? "var(--dark-blue-text)" : "var(--white)"};
`;

export const SelectOptionsContainer = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  top: 100%;
  transform: translateY(10px);
  background-color: ${(props) =>
    props.theme === "light" ? "var(--white)" : "var(--dark-blue)"};
  display: flex;
  flex-direction: column;
  border-radius: 8px;

  z-index: 99;
`;

export const SelectOption = styled.span`
  width: 100%;
  color: ${(props) =>
    props.theme === "light" ? "var(--dark-blue-text)" : "var(--white)"};
  font-size: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  background-color: ${(props) =>
    props.theme === "light" ? "var(--white)" : "var(--dark-blue)"};

  &:first-child {
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  }

  &:last-child {
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }
`;
