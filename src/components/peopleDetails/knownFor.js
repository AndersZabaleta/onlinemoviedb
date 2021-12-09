import useKnownForQuery from "./services/useKnownForQuery";

import MoviesKnownFor from "./moviesKnownFor";

const KnownFor = ({ id }) => {
  const { isLoading, data } = useKnownForQuery(id);

  return <MoviesKnownFor data={data} isLoading={isLoading} />;
};

export default KnownFor;
