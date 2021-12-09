import styled from "styled-components";

export const StyledPageButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledUl = styled.ul`
  list-style: none;
  display: flex;
`;

export const StyledButton = styled.button`
  width: 40px;
  height: 40px;
  margin-right: 2px;
  margin-left: 2px;
  border-radius: 3px;
  border: 1px solid grey;
  box-shadow: 8px 12px 15px -3px #000000;
  background-color: ${(props) => (props.current ? "#E0B416" : "white")};
  &:hover {
    background-color: #e0b416;
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
  box-shadow: 8px 12px 15px -3px #000000;
  &:hover {
    background-color: #e0b416;
    cursor: pointer;
  }
`;
export const StyledEllipsis = styled.span`
  align-self: end;
`;
