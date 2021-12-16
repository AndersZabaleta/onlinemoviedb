import GoBack from "../../common/goBack";

import {
  DetailInfoContainerContainer,
  DetailInfoContainer,
  DetailImgContainer,
  DetaildInfoImage,
  GoBackSVGContainer,
} from "./detailedinfo.styles";
const DetailedInfo = ({ infoImg, name, children }) => {
  return (
    <DetailInfoContainerContainer>
      <GoBackSVGContainer>
        <GoBack />
      </GoBackSVGContainer>
      <DetailInfoContainer>
        <DetailImgContainer>
          <DetaildInfoImage src={infoImg} alt={name} />
        </DetailImgContainer>
        {children}
      </DetailInfoContainer>
    </DetailInfoContainerContainer>
  );
};

export default DetailedInfo;
