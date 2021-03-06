import { ReactComponent as Star } from "../../star.svg";
import GenresPill from "../genresPill/genresPill";

import {
  InfoContainer,
  AverageVotesContainer,
  PillsContainer,
  StyledFormatedDate,
} from "./movieInfo.styles";

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
      <p>
        Release date: <StyledFormatedDate> {releaseDate}</StyledFormatedDate>
      </p>

      <div>
        <AverageVotesContainer>
          <Star />
          <p>{voteAverage}/10</p>
        </AverageVotesContainer>
        <p>Total votes: {voteCount}</p>
        <p>Popularity: {popularity}</p>
        <p>Runtime: {runtime}'</p>
        <PillsContainer>
          {genres.map((genre) => {
            return (
              <GenresPill key={genre.id} genreName={genre.name} pillSize="L" />
            );
          })}
        </PillsContainer>
      </div>
    </InfoContainer>
  );
};

export default MovieInfo;
