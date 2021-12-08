import { useParams, Navigate } from "react-router-dom";
import useMovieDetailsQuery from "./services/useMovieDetailsQuery";
import MovieCast from "./movieCast";
import { ReactComponent as Star } from "../../shared/star.svg";
import { GenresContainer, GenresSpan } from "../../shared/genres.styled";
import {
  MovieDetailsPage,
  MovieDetailsContainerContainer,
  MovieDetailsContainer,
  MovieDetailsImgContainer,
  InfoContainer,
  DetaildInfoImage,
  AverageVotesContainer,
} from "../../shared/detailView.styled";
const MovieDetails = () => {
  const { id } = useParams();
  const { isLoading, error, data } = useMovieDetailsQuery(id);

  if (isLoading) return "Loading...";
  if (error) return "There was an error " + error.message;
  if (data.status_code) return <Navigate to="/404" />;
  return (
    <MovieDetailsPage>
      <MovieDetailsContainerContainer>
        <MovieDetailsContainer>
          <MovieDetailsImgContainer>
            <DetaildInfoImage
              src={`https://image.tmdb.org/t/p/w400${data.poster_path}`}
              alt={data.title}
            />
          </MovieDetailsImgContainer>
          <InfoContainer>
            <h3>{data.title}</h3>
            <p>Overview: {data.overview}</p>
            <p>Release date: {data.release_date}</p>
            <div>
              <AverageVotesContainer>
                <Star />
                <p>{data.vote_average}/10</p>
              </AverageVotesContainer>
              <p>Total votes: {data.vote_count}</p>
              <p>Popularity: {data.popularity}</p>
              <p>Runtime: {data.runtime}'</p>
              <GenresContainer>
                {data.genres.map((genre) => {
                  return <GenresSpan>{genre.name}</GenresSpan>;
                })}
              </GenresContainer>
            </div>
          </InfoContainer>
        </MovieDetailsContainer>
      </MovieDetailsContainerContainer>
      <MovieCast id={id} />
    </MovieDetailsPage>
  );
};

export default MovieDetails;
