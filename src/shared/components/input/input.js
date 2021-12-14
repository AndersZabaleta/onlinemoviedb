import { useState } from "react";
import useSearchQuery from "./services/useSearchQuery";
import useDebounce from "../../hooks/useDebounce";
import AutoComplete from "./autocomplete";
import Spinner from "../spinner";
import {
  StyledAutocompleteResults,
  AutocompleteImage,
  StyledInput,
  InputContainer,
  AutocompleteLink,
  AutocompleteP,
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
      <AutoComplete>
        {data === "Nothing was found" ? (
          <StyledAutocompleteResults>
            <AutocompleteP>Nothing was found</AutocompleteP>
          </StyledAutocompleteResults>
        ) : isLoading ? (
          <StyledAutocompleteResults>
            <Spinner />
          </StyledAutocompleteResults>
        ) : (
          data.map((movie) => {
            return (
              <StyledAutocompleteResults key={movie.id}>
                <AutocompleteLink to={`/m/details/${movie.id}`}>
                  <AutocompleteImage
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w400${movie.poster_path}`
                        : "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
                    }
                    alt={movie.title}
                  />
                  <AutocompleteP>{movie.title}</AutocompleteP>
                </AutocompleteLink>
              </StyledAutocompleteResults>
            );
          })
        )}
      </AutoComplete>
    </>
  );
};

export default Input;
