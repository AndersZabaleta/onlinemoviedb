import usePopularQuery from "../home/services/useDiscoverQuery";
import {
  HomeContainer,
  MovieCardsContainer,
  MovieCard,
  CardTitle,
} from "../home/home.styled";

import { Link } from "react-router-dom";
const Home2 = () => {
  const NUMBER_OF_RESULTS = 4;
  const genre = "28";
  const page = 1;
  const sort = "popularity.desc";
  const { isLoading, error, data } = usePopularQuery(
    genre,
    page,
    sort,
    NUMBER_OF_RESULTS
  );

  if (isLoading) return "Loading...";

  return (
    <HomeContainer>
      <MovieCardsContainer>
        {data.map((movie) => {
          return (
            <MovieCard>
              <Link to={`/m/details/${movie.id}`}>
                <CardTitle>{movie.original_title}</CardTitle>
              </Link>
              <Link to={`/m/details/${movie.id}`}>
                {movie.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                    style={{ width: "100%" }}
                  />
                ) : (
                  <img
                    style={{ width: "200px", height: "300px" }}
                    src="https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
                    alt={movie.original_title}
                  />
                )}
              </Link>
            </MovieCard>
          );
        })}
      </MovieCardsContainer>
    </HomeContainer>
  );
};

export default Home2;
