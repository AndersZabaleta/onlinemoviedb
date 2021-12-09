import { TableWrapper } from "../../shared/detailView.styled";

import Table from "../../shared/components/table/table";

const MoviesKnownFor = ({ data, isLoading }) => {
  if (isLoading) return "Loading...";
  return (
    <TableWrapper>
      <Table data={data} dataType="people" />
    </TableWrapper>
  );
};

export default MoviesKnownFor;
