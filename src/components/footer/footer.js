import { useLocation } from "react-router-dom";

import { StyledFooter, GithubImg } from "./footer.styels";

const Footer = () => {
  const location = useLocation().pathname;
  return (
    <StyledFooter location={location}>
      <a href="https://github.com/AndersZabaleta/beezy">
        <GithubImg
          src="https://cdn3.iconfinder.com/data/icons/inficons/512/github.png"
          alt="Github"
        />
      </a>
    </StyledFooter>
  );
};

export default Footer;
