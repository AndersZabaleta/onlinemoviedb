import { StyledAutocomplete } from "./autocomplete.styles";

const AutoComplete = ({ children, isLoading }) => {
  if (isLoading) return <StyledAutocomplete>Loading...</StyledAutocomplete>;
  return <StyledAutocomplete>{children}</StyledAutocomplete>;
};

export default AutoComplete;
