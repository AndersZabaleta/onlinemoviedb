import MovieInfo from "./movieInfo";
import PeopleInfo from "./peopleInfo";
import {
  MovieDetailsContainerContainer,
  MovieDetailsContainer,
  MovieDetailsImgContainer,
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
    <MovieDetailsContainerContainer>
      <MovieDetailsContainer>
        <MovieDetailsImgContainer>
          <DetaildInfoImage
            src={`https://image.tmdb.org/t/p/w400${infoImg}`}
            alt={name}
          />
        </MovieDetailsImgContainer>
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
      </MovieDetailsContainer>
    </MovieDetailsContainerContainer>
  );
};

export default DetailedInfo;
