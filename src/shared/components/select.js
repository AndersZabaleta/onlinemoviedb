import { DropdownWrapper, DropDown, SelectSpan } from "./select.styled";

const Select = ({ onChange, options }) => {
  return (
    <DropdownWrapper>
      <SelectSpan>Genres: </SelectSpan>
      <DropDown onChange={(e) => onChange(e)}>
        {options.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </DropDown>
    </DropdownWrapper>
  );
};

export default Select;
