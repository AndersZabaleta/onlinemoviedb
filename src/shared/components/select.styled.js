import styled from "styled-components";

export const DropdownWrapper = styled.div`
  background-color: transparent;
  border: 1px solid black;
  border-radius: 10px;
  &:hover {
    background-color: white;
  }
  @media (max-width: 820px) {
    margin: 10px 0px 10px 0px;
  }
`;

export const DropDown = styled.select`
  border-radius: 10px;
  outline: none;
  border: none;
  background-color: transparent;
  width: 60%;
`;

export const SelectSpan = styled.span`
  margin-left: 5px;
  margin-right: 5px;
  width: 29%;
`;


