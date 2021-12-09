import { useQuery } from "react-query";

const getMovieDetails = async (id) =>
  fetch(
    `${process.env.REACT_APP_API_URL}movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  ).then((res) => res.json());

const useMovieDetailsQuery = (id) => {
  const { data, error, isLoading } = useQuery(["movieCast", id], () =>
    getMovieDetails(id)
  );

  return { data, error, isLoading };
};

export default useMovieDetailsQuery;
