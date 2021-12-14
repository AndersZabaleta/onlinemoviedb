import styled from "styled-components";

export const StyledPageButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  padding-top: 40px;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  margin: 20px 0px;
  padding: 0;
`;

export const StyledButton = styled.button`
  width: 40px;
  height: 40px;
  margin-right: 2px;
  margin-left: 2px;
  border-radius: 3px;
  border: 1px solid grey;
  box-shadow: 8px 12px 15px -3px ${({ theme: { colors } }) => colors.header};
  background-color: ${(props) =>
    props.current ? props.theme.colors.active : "white"};
  &:hover {
    background-color: ${({ theme: { colors } }) => colors.active};
    cursor: pointer;
  }
`;

export const StyledNextPrevButtons = styled.button`
  width: auto;
  margin-right: 2px;
  margin-left: 2px;
  height: 40px;
  background-color: white;
  border-radius: 3px;
  border: 1px solid grey;
  box-shadow: 8px 12px 15px -3px ${({ theme: { colors } }) => colors.header};
  &:hover {
    background-color: ${({ theme: { colors } }) => colors.active};
    cursor: pointer;
  }
`;
export const StyledEllipsis = styled.span`
  align-self: end;
`;
