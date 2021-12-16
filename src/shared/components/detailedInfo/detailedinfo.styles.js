import styled from "styled-components";
export const DetailInfoContainerContainer = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: ${({ theme: { colors } }) => colors.detailedInfoBg};
  (max-width: 540px) {
    font-size: 12px;
  }
  @media (max-width: 411px) {
    font-size: 10px;
    height: 100%;
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
  margin-top: 20px;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const DetaildInfoImage = styled.img`
  width: 266.797px;
  @media (max-width: 768px) {
    width: 166.797px;
  }
  @media (max-width: 540px) {
    width: 126.797px;
  }
  @media (max-width: 414px) {
    width: 126.797px;
  }
`;

export const GoBackSVGContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: end;
`;
