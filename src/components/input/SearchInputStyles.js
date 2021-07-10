import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const SearchGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 1rem;
  margin: 1rem 0;

  background-color: ${(props) =>
    props.theme === "light" ? "var(--white)" : "var(--dark-blue)"};
`;

export const SearchIcon = styled(FontAwesomeIcon).attrs(() => ({
  icon: faSearch,
}))`
  color: ${(props) =>
    props.theme === "light" ? "var(--dark-blue-text)" : "var(--white)"};
`;

export const Input = styled.input`
  background-color: ${(props) =>
    props.theme === "light" ? "var(--white)" : "var(--dark-blue)"};
  color: ${(props) =>
    props.theme === "light" ? "var(--dark-blue-text)" : "var(--white)"};
  font-size: 1rem;
  padding: 0.75rem;
  border-radius: 4px;
  border: none;
  outline: none;
  flex-grow: 1;

  &::-webkit-input-placeholder {
    color: ${(props) =>
      props.theme === "light" ? "var(--dark-blue-text)" : "var(--white)"};
  }

  &::-moz-placeholder {
    color: ${(props) =>
      props.theme === "light" ? "var(--dark-blue-text)" : "var(--white)"};
  }

  &:-ms-input-placeholder {
    color: ${(props) =>
      props.theme === "light" ? "var(--dark-blue-text)" : "var(--white)"};
  }

  &:-moz-placeholder {
    color: ${(props) =>
      props.theme === "light" ? "var(--dark-blue-text)" : "var(--white)"};
  }
`;
