import { useQuery } from "react-query";

const getPopular = async (genre, page, sortByValue) =>
  fetch(
    `${process.env.REACT_APP_API_URL}discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=${sortByValue}&include_adult=false&include_video=false&page=${page}&with_genres=${genre}&with_watch_monetization_types=flatrate`
  ).then((res) => res.json());

const mapData = (data, NUMBER_OF_RESULTS, genres) => {
  const array = [];
  for (let i = 0; i < NUMBER_OF_RESULTS; i++) {
    array.push(data.results[i]);
    if (genres) {
      array[i].genres = [];
    }
  }
  if (genres) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].genre_ids.length; j++) {
        for (let f = 0; f < genres.length; f++) {
          if (array[i].genre_ids[j] === genres[f].id) {
            array[i].genres.push(genres[f]);
          }
        }
      }
    }
  }

  return array;
};

const usePopularQuery = (
  genre,
  page,
  sortByValue,
  NUMBER_OF_RESULTS,
  genres
) => {
  const {
    data: originalData,
    error,
    isLoading,
  } = useQuery(["popular", genre, page, sortByValue], () =>
    getPopular(genre, page, sortByValue)
  );
  const totalPages = originalData?.total_pages;

  const data = originalData
    ? mapData(originalData, NUMBER_OF_RESULTS, genres)
    : [];
  return { data, error, isLoading, totalPages };
};

export default usePopularQuery;
