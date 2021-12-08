import { Link } from "react-router-dom";
import { useState } from "react";
import PageButtonWrapper from "../../shared/PageButtonWrapper";
import { GenresContainer, GenresSpan } from "../../shared/genres.styled";
import usePopularQuery from "./services/useDiscoverQuery";
import {
  HomeContainer,
  MovieCardsContainer,
  MovieCard,
  CardTitle,
  /*   GenresContainer, */
  /*   GenresSpan, */
  CardImage,
} from "./home.styled";

const NUMBER_OF_RESULTS = 20;

const DiscoverMovies = ({ genre, pageParams, sortByValue, genres }) => {
  console.log(genres);
  const [page, setPage] = useState(pageParams ? pageParams : 1);
  const { isLoading, error, data, totalPages } = usePopularQuery(
    genre,
    pageParams ? pageParams : page,
    sortByValue,
    NUMBER_OF_RESULTS,
    genres
  );
  if (error) return "There was an error " + error.message;
  if (isLoading) return "Loading...";
  const handlePage = (page) => {
    setPage(page);
  };

  return (
    <>
      <HomeContainer>
        <MovieCardsContainer>
          {data.map((movie) => {
            return (
              <MovieCard>
                <Link to={`/m/details/${movie.id}`}>
                  {movie.poster_path ? (
                    <CardImage
                      src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                      alt={movie.title}
                      style={{ width: "100%" }}
                    />
                  ) : (
                    <CardImage
                      style={{ width: "200px", height: "300px" }}
                      src="https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
                      alt={movie.original_title}
                    />
                  )}
                  <CardTitle>{movie.original_title}</CardTitle>
                </Link>
                {/* <Link to={`/m/details/${movie.id}`}>
                 
                </Link> */}
                <GenresContainer>
                  {movie.genres.map((genre) => {
                    return <GenresSpan>{genre.name}</GenresSpan>;
                  })}
                </GenresContainer>
              </MovieCard>
            );
          })}
        </MovieCardsContainer>
      </HomeContainer>
      <PageButtonWrapper
        currentPage={parseInt(page)}
        handlePage={handlePage}
        totalPages={totalPages}
      ></PageButtonWrapper>
    </>
  );
};
export default DiscoverMovies;
