import { useQuery } from "react-query";

const getPeopleDetails = async (id) =>
  fetch(
    `${process.env.REACT_APP_API_URL}person/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  ).then((res) => res.json());

const usePeopleDetailsQuery = (id) => {
  const { data, error, isLoading } = useQuery(["tvDetails", id], () =>
    getPeopleDetails(id)
  );

  return { data, error, isLoading };
};

export default usePeopleDetailsQuery;
