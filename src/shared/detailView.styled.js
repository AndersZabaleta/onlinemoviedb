import styled from "styled-components";

export const MovieDetailsPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: white;
`;
export const MovieDetailsContainerContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: rgb(31, 31, 31);
  @media (max-width: 540px) {
    font-size: 12px;
  }
  @media (max-width: 320px) {
    font-size: 10px;
  }
`;

export const MovieDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const MovieDetailsImgContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const InfoContainer = styled.div`
  width: 50%;
  /*   white-space: nowrap;
  overflow: hidden; */
  @media (max-width: 768px) {
    width: 266.797px;
  }
`;

export const AverageVotesContainer = styled.div`
  display: flex;
  align-items: center;
  height: 10px;
  height: 10px;
  width: 69px;
  justify-content: space-around;
`;
/* export const DetaildInfoContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: rgb(31, 31, 31);
  height: 100vh;
  align-items: center;
`;

export const DetaildInfoWrapper = styled.div`
  display: flex;
  width: 80%;
  margin-top: 20px;
  margin-bottom: 20px;
  color: white;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const DetaildInfoContainerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const DetailedInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 50%;
`;
export const DetailedInfoImgContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`; */

export const TableWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    /* font-size: 12px; */
    width: 100%;
  }
`;
