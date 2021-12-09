import usePopularQuery from "../movies/services/useDiscoverQuery";
import Card from "../../shared/components/card";
import { HomeContainer, MovieCardsContainer } from "./home.styles";

const NUMBER_OF_RESULTS = 4;
const genre = "28";
const page = 1;
const sort = "popularity.desc";

const Home = () => {
  
  const { isLoading, data } = usePopularQuery(
    genre,
    page,
    sort,
    NUMBER_OF_RESULTS
  );

  if (isLoading) return "Loading...";

  return (
    <HomeContainer>
      <MovieCardsContainer>
        {data.map((movie) => {
          return (
            <Card
              key={movie.id}
              imgUrl={movie.poster_path}
              name={movie.original_title}
              genres={movie.genres ? movie.genres : []}
              objectId={movie.id}
            />
          );
        })}
      </MovieCardsContainer>
    </HomeContainer>
  );
};

export default Home;
