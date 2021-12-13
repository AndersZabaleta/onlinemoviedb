import styled from "styled-components";

export const DropdownWrapper = styled.div`
  width: 30%;
  @media (max-width: 820px) {
    width: 80%;
    margin-top: 10px;
  }
`;

export const DropDown = styled.select`
  width: 100%;
  border-radius: 10px;
  height: 25px;
`;
