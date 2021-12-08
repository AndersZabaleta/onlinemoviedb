import usePopularQuery from "../movies/services/useDiscoverQuery";
import {
  HomeContainer,
  MovieCardsContainer,
  MovieCard,
  CardTitle,
} from "../movies/home.styled";

import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  
`;

const Home = () => {
  const NUMBER_OF_RESULTS = 4;
  const genre = "28";
  const page = 1;
  const sort = "popularity.desc";
  const { isLoading, data } = usePopularQuery(
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
            <StyledLink to={`/m/details/${movie.id}`}>
              <MovieCard>
                {movie.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                
                  />
                ) : (
                  <img
                    style={{ width: "200px", height: "300px" }}
                    src="https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
                    alt={movie.original_title}
                  />
                )}

              
                  <CardTitle>{movie.original_title}</CardTitle>
              
              </MovieCard>
            </StyledLink>
          );
        })}
      </MovieCardsContainer>
    </HomeContainer>
  );
};

export default Home;
