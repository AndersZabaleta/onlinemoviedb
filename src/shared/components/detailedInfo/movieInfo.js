import { InfoContainer, AverageVotesContainer } from "./detailedinfo.styles";
import { ReactComponent as Star } from "../../star.svg";
import GenresPill from "../genresPill";
const MovieInfo = ({
  name,
  description,
  releaseDate,
  voteAverage,
  voteCount,
  popularity,
  runtime,
  genres,
}) => {
  return (
    <InfoContainer>
      <h3>{name}</h3>
      <p>Overview: {description}</p>
      <p>Release date: {releaseDate}</p>
      <div>
        <AverageVotesContainer>
          <Star />
          <p>{voteAverage}/10</p>
        </AverageVotesContainer>
        <p>Total votes: {voteCount}</p>
        <p>Popularity: {popularity}</p>
        <p>Runtime: {runtime}'</p>

        {genres.map((genre) => {
          return (
            <GenresPill key={genre.id} genreName={genre.name} pillSize={"L"} />
          );
        })}
      </div>
    </InfoContainer>
  );
};

export default MovieInfo;
