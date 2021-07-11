import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const SearchGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 100%;
  padding: 0 1rem;
  margin: 1rem 0;
  border-radius: 8px;

  background-color: ${(props) =>
    props.theme === "light" ? "var(--white)" : "var(--dark-blue)"};

  @media (min-width: 768px) {
    flex-basis: 70%;
  }

  @media (min-width: 992px) {
    flex-basis: 50%;
  }
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
  border-radius: 8px;
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
