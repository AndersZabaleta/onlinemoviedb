import styled from "styled-components";
import PILL_SIZES from "./pillSizes";
export const Pill = styled.span`
  background-color: #121212bb;
  padding-top: 5px;
  padding-bottom: 5px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 8px;
  text-align: center;
  font-size: ${({ pillSize }) =>
    pillSize === PILL_SIZES.SMALL.size
      ? PILL_SIZES.SMALL.fontSize
      : PILL_SIZES.LARGE.fontSize};
  height: ${({ pillSize }) =>
    pillSize === PILL_SIZES.SMALL.size
      ? PILL_SIZES.SMALL.height
      : PILL_SIZES.LARGE.heigth};
  width: ${({ pillSize }) =>
    pillSize === PILL_SIZES.SMALL.size
      ? PILL_SIZES.SMALL.width
      : PILL_SIZES.LARGE.width};
  font-weight: bold;
  margin: 2px;
  &:hover {
    cursor: default;
  }
  @media (max-width: 540px) {
    font-size: ${PILL_SIZES.SMALL.fontSize};
    height: ${PILL_SIZES.SMALL.height};
    width: ${PILL_SIZES.SMALL.width};
  }
  @media (max-width: 411px) {
    font-size: ${PILL_SIZES.SMALL.fontSize};
    height: ${PILL_SIZES.SMALL.height};
    width: ${PILL_SIZES.SMALL.width};
  }
  @media (max-width: 360px) {
    font-size: 10px;
    height: 12px;
    width: 75px;
  }
`;
