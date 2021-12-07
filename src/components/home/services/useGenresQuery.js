import { useQuery } from "react-query";

const getGenres = async () =>
  fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=fdca631f4b9babbd32b6f8487c1dfad1&language=en-US`
  ).then((res) => res.json());

const mapData = (data) => {
  return data?.genres;
};

const useGenresQuery = () => {
  const {
    data: originalData,
    error,
    isLoading,
  } = useQuery("genres", () => getGenres());

  const data = originalData ? mapData(originalData) : [];
  return { data, error, isLoading };
};

export default useGenresQuery;
