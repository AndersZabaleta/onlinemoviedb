import styled from "styled-components";
import { PILL_SIZES } from "./genresPill";
export const Pill = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 8px;
  text-align: center;
  font-size: ${({ pillSize }) => (pillSize === PILL_SIZES.S ? "12px" : "15px")};
  height: ${({ pillSize }) => (pillSize === PILL_SIZES.S ? "18px" : "23px")};
  width: ${({ pillSize }) => (pillSize === PILL_SIZES.S ? "100px" : "200px")};
  font-weight: bold;
  margin: 2px;
  &:hover {
    cursor: default;
  }
`;
