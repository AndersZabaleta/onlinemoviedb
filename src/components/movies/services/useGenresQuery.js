import { useQuery } from "react-query";

const getGenres = async () =>
  fetch(
    `${process.env.REACT_APP_API_URL}genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
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
