import styled from "styled-components";

export const GenresContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 80%;
  align-items: center;
`;

export const GenresSpan = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border: 1px solid black;
  border-radius: 8px;
  display: inline-block;
  text-align: center;
  font-size: 8px;
  height: 15px;
  width: 23%;
  font-weight: bold;
  &:hover {
    cursor: default;
  }
`;
