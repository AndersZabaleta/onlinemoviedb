import { useParams, Navigate } from "react-router-dom";
import useMovieDetailsQuery from "./services/useMovieDetailsQuery";
import MovieCast from "./movieCast";
import DetailedInfo from "../../shared/components/detailedInfo";
import MovieInfo from "../../shared/components/detailedInfo/movieInfo";
import { DetailPage } from "../../shared/common/styles";
const MovieDetails = () => {
  const { id } = useParams();
  const { isLoading, error, data } = useMovieDetailsQuery(id);

  if (isLoading) return "Loading...";
  if (error) return "There was an error " + error.message;
  if (data.status_code) return <Navigate to="/404" />;
  const {
    poster_path,
    title,
    overview,
    release_date,
    vote_average,
    vote_count,
    popularity,
    runtime,
    genres,
  } = data;
  return (
    <DetailPage>
      <DetailedInfo
        infoImg={
          poster_path
            ? `https://image.tmdb.org/t/p/w400${poster_path}`
            : "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
        }
        name={title}
      >
        <MovieInfo
          description={overview}
          name={title}
          voteAverage={vote_average}
          voteCount={vote_count}
          popularity={popularity}
          runtime={runtime}
          releaseDate={release_date}
          genres={genres}
        />
      </DetailedInfo>
      <MovieCast id={id} />
    </DetailPage>
  );
};

export default MovieDetails;
