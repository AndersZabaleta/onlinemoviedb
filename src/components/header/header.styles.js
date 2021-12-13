import { Link } from "react-router-dom";
import styled from "styled-components";
export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme: { colors } }) => colors.header};
  color: white;
`;

export const HeaderElement = styled.div`
  padding: 20px;
  background-color: ${(props) =>
    props.current ? props.theme.colors.active : "transparent"};

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.active};
    cursor: pointer;
  }
`;

export const HeaderElementContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
