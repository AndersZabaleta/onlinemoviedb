import { useQuery } from "react-query";

const getMovieCast = async (id) =>
  fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=fdca631f4b9babbd32b6f8487c1dfad1&language=en-US`
  ).then((res) => res.json());

const mapData = (data) => {
  return data?.cast;
};

const useMovieCastQuery = (id) => {
  const {
    data: originalData,
    error,
    isLoading,
  } = useQuery(["popular", id], () => getMovieCast(id));

  const data = originalData ? mapData(originalData) : [];
  return { data, error, isLoading };
};

export default useMovieCastQuery;
