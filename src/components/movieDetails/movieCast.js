import useMovieCastQuery from "./services/useMovieCastQuery";
import Table from "../../shared/components/table";
import { TableWrapper } from "../../shared/common/styles";

const MovieCast = ({ id }) => {
  const { isLoading, error, data } = useMovieCastQuery(id);
  if (isLoading) return "Loading...";
  if (error) return "There was an error " + error.message;
  return (
    <TableWrapper>
      <Table tableLinkValue="p" data={data} dataType="movie" />
    </TableWrapper>
  );
};

export default MovieCast;
