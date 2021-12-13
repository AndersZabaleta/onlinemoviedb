import { useParams, useNavigate } from "react-router-dom";

import useGenresQuery from "./services/useGenresQuery";

import DiscoverMovies from "./discoverMovies";
import Select from "../../shared/components/select";
import Input from "../../shared/components/input";

import { SelectWrapper, StyledHome } from "./movies.styels";

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
  const { page, genre, sortValue } = useParams();

  const navigate = useNavigate();

  const { isLoading, data } = useGenresQuery();
  const handleGenre = (e) => {
    navigate(`/discover/genre=${e.target.value}/sort_by=${sortValue}/page/1`);
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
          span="Genre"
        />
        <Select
          selectedOption={sortValue}
          onChange={handleSortByValue}
          options={sortMoviesOption}
          span="Sort by"
        />
        <Input />
      </SelectWrapper>
      <DiscoverMovies
        genres={data}
        genre={genre}
        pageParams={page}
        sortByValue={sortValue}
      />
    </StyledHome>
  );
};

export default Movies;
