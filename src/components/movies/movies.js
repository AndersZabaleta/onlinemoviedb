import { useState } from "react";
import { useParams } from "react-router-dom";
import { StyledHome } from "./home.styled";
import { SelectWrapper } from "../../shared/select.styled";

import useGenresQuery from "./services/useGenresQuery";
import Genres from "./genres";
import DiscoverMovies from "./discoverMovies";
import SortMovies from "./sortMovies";

const Movies = () => {
  const pageParams = useParams().page;

  const [genre, setGenre] = useState("28");
  const [sortByValue, setSortByValue] = useState("popularity.desc");

  const { isLoading, error, data } = useGenresQuery();
  const handleGenre = (e) => {
    setGenre(e.target.value);
  };
  const handleSortByValue = (e) => {
    setSortByValue(e.target.value);
  };
  if (isLoading) return null;
  return (
    <StyledHome>
      <SelectWrapper>
        <Genres data={data} handleGenre={handleGenre} />
        <SortMovies handleSortByValue={handleSortByValue} />
      </SelectWrapper>
      <DiscoverMovies
        genres={data}
        genre={genre}
        pageParams={pageParams}
        sortByValue={sortByValue}
      />
    </StyledHome>
  );
};

export default Movies;
