import styled from "styled-components";

export const Pill = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border: 1px solid black;
  border-radius: 8px;
  text-align: center;
  font-size: ${({ pillSize }) => (pillSize === "S" ? "8px" : "12px")};
  height: ${({ pillSize }) => (pillSize === "S" ? "15px" : "23px")};
  width: 23%;
  font-weight: bold;
  margin: 2px;
  &:hover {
    cursor: default;
  }
`;
