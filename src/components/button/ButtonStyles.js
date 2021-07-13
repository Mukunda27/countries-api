import styled from "styled-components";

export const StyledBth = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;

  box-shadow: 1px 1px 4px
      ${(props) => (props.theme === "light" ? "#bbb" : "#222")},
    -1px -1px 4px ${(props) => (props.theme === "light" ? "#bbb" : "#222")};

  background-color: ${(props) =>
    props.theme === "light" ? "var(--white)" : "var(--dark-blue)"};
  color: ${(props) =>
    props.theme === "light" ? "var(--dark-blue-text)" : "var(--white)"};
`;
