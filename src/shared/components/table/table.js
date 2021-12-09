import TableBody from "./tableBody";
import { StyledTable, Tr, Th, Thead } from "./table.styles";
const Table = ({ data, dataType }) => {
  return (
    <StyledTable>
      <Thead>
        <Tr>
          <Th>Image</Th>
          <Th>Name</Th>
          <Th>Character</Th>
        </Tr>
      </Thead>
      <TableBody data={data} dataType={dataType} />
    </StyledTable>
  );
};

export default Table;
