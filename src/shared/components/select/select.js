import { DropdownWrapper, DropDown, SelectSpan } from "./select.styles";

const Select = ({ onChange, options, span, selectedOption }) => {
  return (
    <DropdownWrapper>
      <SelectSpan>{span}: </SelectSpan>
      <DropDown onChange={(e) => onChange(e)}>
        {options.map((option) => {
          return (
            <option
              selected={option.id === selectedOption}
              key={option.id}
              value={option.id}
            >
              {option.name}
            </option>
          );
        })}
      </DropDown>
    </DropdownWrapper>
  );
};

export default Select;
