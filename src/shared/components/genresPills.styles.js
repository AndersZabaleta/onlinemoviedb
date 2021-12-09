import styled from "styled-components";

export const Pill = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border: 1px solid black;
  border-radius: 8px;
  display: inline-block;
  text-align: center;
  margin: 2px;
  font-size: ${({ pillSize }) => (pillSize === "S" ? "8px" : "10px")};
  height: 15px;
  width: 23%;
  font-weight: bold;

  &:hover {
    cursor: default;
  }
`;
