import styled from "styled-components";
import { Link } from "react-router-dom";
export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #000000;
  color: white;
`;

export const HeaderElement = styled.div`
  padding: 20px;
  background-color: ${(props) => (props.current ? "#e0b416" : "transparent")};

  &:hover {
    background-color: #e0b416;
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
