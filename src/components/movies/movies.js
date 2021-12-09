import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

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
    id: "original_title.asc",
    name: "Title Asc.",
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
  const genre = useParams().genre;
  const sortByValue = useParams().sortValue;
  const navigate = useNavigate();

  const { isLoading, data } = useGenresQuery();
  const handleGenre = (e) => {
    navigate(`/discover/genre=${e.target.value}/sort_by=${sortByValue}/page/1`);
  };
  const handleSortByValue = (e) => {
    navigate(`/discover/genre=${genre}/sort_by=${e.target.value}/page/1`);
  };
  if (isLoading) return null;
  return (
    <StyledHome>
      <SelectWrapper>
        <Select
          selectedOption={parseInt(genre)}
          onChange={handleGenre}
          options={data}
          span={"Genre"}
        />
        <Select
          selectedOption={sortByValue}
          onChange={handleSortByValue}
          options={sortMoviesOption}
          span={"Sort by"}
        />
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
