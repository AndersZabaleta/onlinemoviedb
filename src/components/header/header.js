import { useLocation } from "react-router-dom";
import {
  HeaderWrapper,
  HeaderElement,
  HeaderElementContainer,
  StyledLink,
} from "./header.styles";

const Header = () => {
  const location = useLocation().pathname;

  return (
    <HeaderWrapper>
      <StyledLink to="/">
        <HeaderElement current={location === "/"}>home</HeaderElement>
      </StyledLink>
      <HeaderElementContainer>
        <StyledLink to="/discover/genre=28/sort_by=popularity.desc/page/1">
          <HeaderElement current={location.includes("discover")}>
            Discover Movies
          </HeaderElement>
        </StyledLink>
      </HeaderElementContainer>
    </HeaderWrapper>
  );
};

export default Header;
