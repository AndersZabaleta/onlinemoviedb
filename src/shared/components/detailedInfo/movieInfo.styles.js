import styled from "styled-components";
import FormatDate from "../../hooks/formatDate";
export const InfoContainer = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const PillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const AverageVotesContainer = styled.div`
  display: flex;
  align-items: center;
  height: 10px;
  height: 10px;
  width: 69px;
  justify-content: space-around;
`;

export const StyledFormatedDate = styled(FormatDate).attrs({ tag: "span" })`
  color: white;
`;
