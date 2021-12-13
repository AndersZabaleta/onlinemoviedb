import { useState } from "react";
import useSearchQuery from "./services/useSearchQuery";
import useDebounce from "../../hooks/useDebounce";
import AutoComplete from "./autocomplete";
import {
  StyledAutocompleteResults,
  AutocompleteImage,
  StyledInput,
  InputContainer,
  AutocompleteLink,
} from "./input.styles";

const MIN_CHARACTERS_TO_SEARCH = 1;
const Input = () => {
  const [searchValue, setSearchValue] = useState("");

  const debouncedValue = useDebounce(searchValue);
  const { isLoading, data } = useSearchQuery({
    searchValue: debouncedValue,
    minCharactersToSearch: MIN_CHARACTERS_TO_SEARCH,
  });

  const handleSearchValue = (ev) => {
    const search = ev.target.value;
    setSearchValue(search);
  };

  return (
    <>
      <InputContainer>
        <StyledInput
          type="text"
          value={searchValue}
          onChange={handleSearchValue}
          placeholder={`Search for movies`}
        />
      </InputContainer>
      <AutoComplete isLoading={isLoading}>
        {data === "Nothing was found"
          ? "Nothing was found"
          : data.map((movie) => {
              return (
                <StyledAutocompleteResults>
                  <AutocompleteLink to={`/m/details/${movie.id}`}>
                    <AutocompleteImage
                      src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
                      alt={movie.title}
                    />
                    {movie.title}
                  </AutocompleteLink>
                </StyledAutocompleteResults>
              );
            })}
      </AutoComplete>
    </>
  );
};

export default Input;