import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  height: 100%;
`;
export const MovieCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px;
`;

export const LinkButton = styled.button`
  width: 250px;
  height: 50px;
  background-color: ${({ theme: { colors } }) => colors.active};
  border-radius: 10px;
  box-shadow: 8px 12px 15px -3px ${({ theme: { colors } }) => colors.header};
  margin: 20px;
`;
