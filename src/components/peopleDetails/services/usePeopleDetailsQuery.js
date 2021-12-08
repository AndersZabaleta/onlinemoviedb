import { useQuery } from "react-query";

const getPeopleDetails = async (id) =>
  fetch(
    `https://api.themoviedb.org/3/person/${id}?api_key=fdca631f4b9babbd32b6f8487c1dfad1&language=en-US`
  ).then((res) => res.json());

const usePeopleDetailsQuery = (id) => {
  const { data, error, isLoading } = useQuery(["tvDetails", id], () =>
    getPeopleDetails(id)
  );

  return { data, error, isLoading };
};

export default usePeopleDetailsQuery;
