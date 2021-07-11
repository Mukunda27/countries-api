import styled from "styled-components";

export const StyledBth = styled.button`
  padding: 1rem 2rem;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: 700;

  background-color: ${(props) =>
    props.theme === "light" ? "var(--white)" : "var(--dark-blue)"};
  color: ${(props) =>
    props.theme === "light" ? "var(--dark-blue-text)" : "var(--white)"};
`;
