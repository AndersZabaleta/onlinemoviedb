import Table from "../../shared/components/table";
import { TableWrapper } from "../../shared/common/styles";
const MoviesKnownFor = ({ data, isLoading }) => {
  if (isLoading) return "Loading...";
  return (
    <TableWrapper>
      <Table tableLinkValue="m" data={data} dataType="people" />
    </TableWrapper>
  );
};

export default MoviesKnownFor;
