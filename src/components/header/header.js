import { Link } from "react-router-dom";
import {
  HeaderWrapper,
  HeaderElement,
  HeaderElementContainer,
  StyledLink,
} from "./header.styled";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const location = useLocation().pathname;

  return (
    <HeaderWrapper>
      <StyledLink to="/">
        <HeaderElement current={location === "/"}>home</HeaderElement>
      </StyledLink>
      <HeaderElementContainer>
        <StyledLink to="/discover/page/1">
          <HeaderElement current={location.includes("discover")}>
            Discover Movies
          </HeaderElement>
        </StyledLink>
      </HeaderElementContainer>
    </HeaderWrapper>
  );
};

export default Header;
