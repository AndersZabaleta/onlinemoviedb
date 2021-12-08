import { useQuery } from "react-query";

const getKnownFor = async (id) =>
  fetch(
    `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=fdca631f4b9babbd32b6f8487c1dfad1&language=en-US`
  ).then((res) => res.json());

const mapData = (data) => {
  return data?.cast;
};

const useKnownForQuery = (id, radioValue) => {
  const {
    data: originalData,
    error,
    isLoading,
  } = useQuery(["popular", id, radioValue], () => getKnownFor(id, radioValue));

  const data = originalData ? mapData(originalData) : [];
  return { data, error, isLoading };
};

export default useKnownForQuery;
