import { useParams, Navigate } from "react-router-dom";
import useMovieDetailsQuery from "./services/useMovieDetailsQuery";
import MovieCast from "./movieCast";
import DetailedInfo from "../../shared/components/detailedInfo";
import { MovieDetailsPage } from "../../shared/detailView.styled";
const MovieDetails = () => {
  const { id } = useParams();
  const { isLoading, error, data } = useMovieDetailsQuery(id);

  if (isLoading) return "Loading...";
  if (error) return "There was an error " + error.message;
  if (data.status_code) return <Navigate to="/404" />;
  return (
    <MovieDetailsPage>
      <DetailedInfo
        infoType="movie"
        infoImg={data.poster_path}
        name={data.title}
        description={data.overview}
        releaseDate={data.release_date}
        voteAverage={data.vote_average}
        voteCount={data.vote_count}
        popularity={data.popularity}
        runtime={data.runtime}
        genres={data.genres}
      />
      <MovieCast id={id} />
    </MovieDetailsPage>
  );
};

export default MovieDetails;
