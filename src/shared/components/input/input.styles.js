import styled from "styled-components";
import { Link } from "react-router-dom";

export const AutocompleteLink = styled(Link)`
  display: flex;
  align-items: center;
  test-decoration: none;
  color: white;
  height: 100%;
`;
export const StyledAutocompleteResults = styled.div`
  color: white;
  height: 75px;
  display: flex;
  align-items: center;

  background-color: ${({ theme: { colors } }) => colors.autompleteBg};
  &:hover {
    background-color: ${({ theme: { colors } }) => colors.autocompleteHover};
  }
`;

export const AutocompleteImage = styled.img`
  width: 50px;
  height: 100%;
`;

export const StyledInput = styled.input`
  width: 100%;
  border-radius: 10px;
  height: 25px;
  padding: 12px;
`;

export const InputContainer = styled.div`
  width: 30%;
  @media (max-width: 820px) {
    width: 80%;
    margin-top: 10px;
  }
`;

export const AutocompleteP = styled.p`
  margin-left: 10px;
`;
