import { InfoContainer } from "./movieInfo.styles";
import { BiographyEllipsis, StyledFormatedDate } from "./peopleInfo.styles";
const PeopleInfo = ({
  name,
  description,
  birthday,
  placeOfBirth,
  popularity,
  gender,
}) => {
  return (
    <InfoContainer>
      <h3>{name}</h3>
      <BiographyEllipsis>Biography: {description}</BiographyEllipsis>
      <p>
        Birthday: <StyledFormatedDate>{birthday}</StyledFormatedDate>
      </p>
      <p>Place of birth: {placeOfBirth}</p>
      <p>Popularity: {popularity}</p>
      <p>Gender: {gender}</p>
    </InfoContainer>
  );
};

export default PeopleInfo;
