import { useQuery } from "react-query";

const getMovieCast = async (id) =>
  fetch(
    `${process.env.REACT_APP_API_URL}movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
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
