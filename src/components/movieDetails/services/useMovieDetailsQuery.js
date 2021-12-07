import { useQuery } from "react-query";

const getMovieDetails = async (id) =>
  fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=fdca631f4b9babbd32b6f8487c1dfad1&language=en-US`
  ).then((res) => res.json());

const useMovieDetailsQuery = (id) => {
  const { data, error, isLoading } = useQuery(["movieCast", id], () =>
    getMovieDetails(id)
  );

  return { data, error, isLoading };
};

export default useMovieDetailsQuery;
