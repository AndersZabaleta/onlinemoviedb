import {
  DetailInfoContainerContainer,
  DetailInfoContainer,
  DetailImgContainer,
  DetaildInfoImage,
} from "./detailedinfo.styles";
const DetailedInfo = ({ infoImg, name, children }) => {
  return (
    <DetailInfoContainerContainer>
      <DetailInfoContainer>
        <DetailImgContainer>
          <DetaildInfoImage
            src={`https://image.tmdb.org/t/p/w400${infoImg}`}
            alt={name}
          />
        </DetailImgContainer>
        {children}
      </DetailInfoContainer>
    </DetailInfoContainerContainer>
  );
};

export default DetailedInfo;
