import TableBody from "./tableBody";
import { StyledTable, Tr, Th, Thead } from "./table.styles";
const Table = ({ data, dataType, tableLinkValue, children }) => {
  return (
    <StyledTable>
      <Thead>
        <Tr>
          <Th>Image</Th>
          <Th>Name</Th>
          <Th>Character</Th>
        </Tr>
      </Thead>
      <TableBody
      // tableLinkValue={tableLinkValue}
      // data={data}
      // dataType={dataType}
      >
        {children}
      </TableBody>
    </StyledTable>
  );
};

export default Table;
