import { Link } from "react-router-dom";
import {
  HeaderWrapper,
  HeaderElement,
  HeaderElementContainer,
} from "./header.styled";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
const Header = () => {
  const location = useLocation().pathname;

  return (
    <HeaderWrapper>
      <StyledLink to="/">
        <HeaderElement>home</HeaderElement>
      </StyledLink>
      <HeaderElementContainer>
        <StyledLink to="/discover/page/1">
          <HeaderElement current={location.includes("discover")}>
            Discover Movies
          </HeaderElement>
        </StyledLink>
        <HeaderElement>Cosas</HeaderElement>
        <HeaderElement>Cosas</HeaderElement>
        <HeaderElement>Cosas</HeaderElement>
        <HeaderElement>Cosas</HeaderElement>
      </HeaderElementContainer>
    </HeaderWrapper>
  );
};

export default Header;
