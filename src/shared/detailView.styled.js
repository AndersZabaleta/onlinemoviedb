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

export const BiographyEllipsis = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
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

export const DetaildInfoImage = styled.img`
  width: 266.797px;
  @media (max-width: 768px) {
    width: 266.797px;
  }
`;

export const TBody = styled.div`
  width: 100%;
`;
export const TableWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    /* font-size: 12px; */
    width: 100%;
  }
`;

export const Table = styled.div`
  margin-top: 30px;
  width: 100%;
  color: #b9b9b9;
  font-weight: bold;
  margin-bottom: 30px;
  border: none;
  @media (max-width: 768px) {
    font-size: 12px;
  }
  /*  @media (max-width: 540px) {
    font-size: 10px;
  }
  @media (max-width: 320px) {
    font-size: 8px;
  } */
`;

export const Tr = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  padding-top: 10px;
  padding-bottom: 10px;
  background-color: ${(props) => props.backgroundColor};
`;

export const Td = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Thead = styled.div`
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #353148;
`;
export const Th = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
  background-color: #353148;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const TableImg = styled.img`
  width: 30%;
  @media (max-width: 540px) {
    width: 50%;
  }
`;
