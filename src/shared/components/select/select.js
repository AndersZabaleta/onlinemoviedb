import { DropdownWrapper, DropDown } from "./select.styles";

const Select = ({ onChange, options, span, selectedOption }) => {
  return (
    <DropdownWrapper>
      <DropDown onChange={(e) => onChange(e)}>
        <option disabled>{span}</option>
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
