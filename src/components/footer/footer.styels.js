import styled from "styled-components";
export const StyledFooter = styled.div`
  position: relative;
  top: 128px;
  display: flex;
  justify-content: center;
  height: ${({ location }) => (location === "/" ? "300px" : "200px")};
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.header};
  margin-top: 20px;
`;

export const GithubImg = styled.img`
  width: 25px;
`;
