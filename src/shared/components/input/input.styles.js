import styled from "styled-components";
import { Link } from "react-router-dom";

export const AutocompleteLink = styled(Link)`
  display: flex;
  align-items: center;
  test-decoration: none;
  color: white;
`;
export const StyledAutocompleteResults = styled.div`
  background-color: ${({ theme: { colors } }) => colors.autompleteBg};
  &:hover {
    background-color: ${({ theme: { colors } }) => colors.autocompleteHover};
  }
`;

export const AutocompleteImage = styled.img`
  width: 50px;
`;

export const StyledInput = styled.input`
  width: 100%;
  border-radius: 10px;
  height: 25px;
`;

export const InputContainer = styled.div`
  width: 30%;
  @media (max-width: 820px) {
    width: 80%;
    margin-top: 10px;
  }
`;
