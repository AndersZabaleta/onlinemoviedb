import styled from "styled-components";
export const MoviesContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
export const MovieCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 80%;
`;

export const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(238, 238, 238);
`;

export const SelectWrapper = styled.div`
  position: relative;
  margin: 10px;
  width: 80%;
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 820px) {
    flex-direction: column;
    align-items: center;
  }
`;
