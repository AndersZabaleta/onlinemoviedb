import {
  DropdownWrapper,
  DropDown,
  SelectSpan,
} from "../../shared/select.styled";

const Genres = ({ data, handleGenre }) => {
  return (
    <DropdownWrapper>
      <SelectSpan>Genres: </SelectSpan>
      <DropDown onChange={(e) => handleGenre(e)}>
        {data.map((genre) => (
          <option value={genre.id}>{genre.name}</option>
        ))}
      </DropDown>
    </DropdownWrapper>
  );
};

export default Genres;
