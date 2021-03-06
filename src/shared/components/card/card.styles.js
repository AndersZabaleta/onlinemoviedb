import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme: { colors } }) => colors.header};
`;

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;

  align-items: center;
  justify-content: center;
  margin: 10px;
  border-radius: 10px;
  background-color: white;
  height: 400px;
  box-shadow: 8px 12px 15px -3px ${({ theme: { colors } }) => colors.header};
  &:hover {
    background-color: ${({ theme: { colors } }) => colors.active};
  }
`;

export const CardTitle = styled.h1`
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  padding: 10px;
  font-size: 1.2rem;
  margin: 0;
  background-color: transparent;
`;

export const PillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 80%;
  align-items: center;
`;
