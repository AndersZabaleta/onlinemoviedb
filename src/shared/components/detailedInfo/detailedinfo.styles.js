import styled from "styled-components";
export const DetailInfoContainerContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  color: white;
  background-color: rgb(31, 31, 31);
  @media (max-width: 540px) {
    font-size: 12px;
  }
  @media (max-width: 320px) {
    font-size: 10px;
  }
`;
export const DetailInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const DetailImgContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const DetaildInfoImage = styled.img`
  width: 266.797px;
  @media (max-width: 768px) {
    width: 266.797px;
  }
`;
