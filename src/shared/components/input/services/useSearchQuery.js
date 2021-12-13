import { useQuery } from "react-query";

const getDataByTypeAndName = async (searchValue) => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=fdca631f4b9babbd32b6f8487c1dfad1&language=en-US&query=${searchValue}&page=1&include_adult=false`
  ).then((res) => res.json());
};

const mapData = (data) => {
  const array = [];
  const arrayLimit = data.results.length >= 10 ? 10 : data.results.length;
  if (data?.results.length > 0) {
    for (let i = 0; i < arrayLimit; i++) {
      if (data.results !== undefined) {
        array.push(data.results[i]);
      }
    }
  }
  if (array.length) {
    return array;
  } else {
    return "Nothing was found";
  }
};

const useSearchQuery = ({ searchValue, minCharactersToSearch }) => {
  const {
    data: originalData,
    error,
    isLoading,
  } = useQuery(
    ["peopleByName", searchValue],
    () => getDataByTypeAndName(searchValue),
    { enabled: Boolean(searchValue.length >= minCharactersToSearch) }
  );

  const data = originalData ? mapData(originalData) : [];

  return { data, error, isLoading };
};

export default useSearchQuery;
