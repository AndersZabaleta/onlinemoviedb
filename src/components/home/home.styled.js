import styled from "styled-components";

export const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(165, 164, 164);
`;

export const CardTitle = styled.h1`
  font-size: 12px;
`;

export const HomeContainer = styled.div`
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
export const MovieCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  align-items: center;
  justify-content: center;
  margin: 10px;
  border-radius: 10px;
  background-color: white;
  height: 400px;
  box-shadow: 8px 12px 15px -3px #000000;
  &:hover {
    background-color: #e0b416;
  }
`;
