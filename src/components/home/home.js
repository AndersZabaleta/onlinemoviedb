import { Link } from "react-router-dom";

import usePopularQuery from "../movies/services/useDiscoverQuery";
import Card from "../../shared/components/card";
import Spinner from "../../shared/components/spinner";
import { HomeContainer, MovieCardsContainer, LinkButton } from "./home.styles";

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

  if (isLoading) return <Spinner />;

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
      <Link to="/discover/genre=28/sort_by=popularity.desc/page/1">
        <LinkButton>Discover movies</LinkButton>
      </Link>
    </HomeContainer>
  );
};

export default Home;
