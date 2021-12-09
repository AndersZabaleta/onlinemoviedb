import { useState } from "react";
import Pagination from "../../shared/components/pagination";
import usePopularQuery from "./services/useDiscoverQuery";
import Card from "../../shared/components/card";
import { MoviesContainer, MovieCardsContainer } from "./movies.styels";

const NUMBER_OF_RESULTS = 20;

const DiscoverMovies = ({ genre, pageParams, sortByValue, genres }) => {
  const [page, setPage] = useState(pageParams);
  const { isLoading, error, data, totalPages } = usePopularQuery(
    genre,
    pageParams,
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
      <MoviesContainer>
        <MovieCardsContainer>
          {data.map((movie) => {
            return (
              <Card
                key={movie.id}
                imgUrl={movie.poster_path}
                name={movie.original_title}
                genres={movie.genres ? movie.genres : []}
                objectId={movie.id}
              />
            );
          })}
        </MovieCardsContainer>
      </MoviesContainer>
      <Pagination
        currentPage={parseInt(pageParams)}
        onClick={handlePage}
        totalPages={totalPages}
        genre={genre}
        sortByValue={sortByValue}
      ></Pagination>
    </>
  );
};
export default DiscoverMovies;
