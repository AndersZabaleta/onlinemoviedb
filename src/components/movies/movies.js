import { useState } from "react";
import { useParams } from "react-router-dom";

import useGenresQuery from "./services/useGenresQuery";

import DiscoverMovies from "./discoverMovies";
import Select from "../../shared/components/select";

import { SelectWrapper, StyledHome } from "./home.styled";

const sortMoviesOption = [
  {
    id: "popularity.desc",
    name: "Popularity Desc.",
  },
  {
    id: "popularity.asc",
    name: "Popularity Asc.",
  },
  {
    id: "original_title.desc",
    name: "Title Desc.",
  },
  {
    id: "release_date.desc",
    name: "Release date Desc.",
  },
  {
    id: "release_date.asc",
    name: "Release date Asc.",
  },
];

const Movies = () => {
  const pageParams = useParams().page;

  const [genre, setGenre] = useState("28");
  const [sortByValue, setSortByValue] = useState("popularity.desc");

  const { isLoading, data } = useGenresQuery();
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
        <Select onChange={handleGenre} options={data} />
        <Select onChange={handleSortByValue} options={sortMoviesOption} />
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
