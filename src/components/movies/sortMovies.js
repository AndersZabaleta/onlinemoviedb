import {
  DropdownWrapper,
  DropDown,
  SelectSpan,
} from "../../shared/components/select.styled";

const SortMovies = ({ handleSortByValue }) => {
  return (
    <DropdownWrapper>
      <SelectSpan>Sort by:</SelectSpan>
      <DropDown onChange={(e) => handleSortByValue(e)}>
        <option value="popularity.desc">Popularity Desc.</option>
        <option value="popularity.asc">Popularity Asc.</option>
        <option value="original_title.asc">Title Desc.</option>
        <option value="original_title.desc">Title Asc.</option>
        <option value="release_date.desc">Release date Desc.</option>
        <option value="release_date.asc">Release date Asc.</option>
      </DropDown>
    </DropdownWrapper>
  );
};

export default SortMovies;
