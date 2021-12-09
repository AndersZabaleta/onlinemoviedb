import MovieInfo from "./movieInfo";
import PeopleInfo from "./peopleInfo";
import {
  DetailInfoContainerContainer,
  DetailInfoContainer,
  DetailImgContainer,
  DetaildInfoImage,
} from "./detailedinfo.styles";
const DetailedInfo = ({
  infoImg,
  name,
  description,
  releaseDate,
  voteAverage,
  voteCount,
  popularity,
  runtime,
  genres,
  infoType,
  birthday,
  gender,
  placeOfBirth,
}) => {
  return (
    <DetailInfoContainerContainer>
      <DetailInfoContainer>
        <DetailImgContainer>
          <DetaildInfoImage
            src={`https://image.tmdb.org/t/p/w400${infoImg}`}
            alt={name}
          />
        </DetailImgContainer>
        {infoType === "movie" ? (
          <MovieInfo
            description={description}
            name={name}
            voteAverage={voteAverage}
            voteCount={voteCount}
            popularity={popularity}
            runtime={runtime}
            releaseDate={releaseDate}
            genres={genres}
          />
        ) : (
          <PeopleInfo
            name={name}
            description={description}
            birthday={birthday}
            placeOfBirth={placeOfBirth}
            popularity={popularity}
            gender={gender}
          />
        )}
      </DetailInfoContainer>
    </DetailInfoContainerContainer>
  );
};

export default DetailedInfo;
