import { useQuery } from "react-query";

const getKnownFor = async (id) =>
  fetch(
    `${process.env.REACT_APP_API_URL}person/${id}/movie_credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
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
