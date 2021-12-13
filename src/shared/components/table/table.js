import TableBody from "./tableBody";
import { StyledTable, Tr, Th, Thead } from "./table.styles";
const Table = ({ children }) => {
  return (
    <StyledTable>
      <Thead>
        <Tr>
          <Th>Image</Th>
          <Th>Name</Th>
          <Th>Character</Th>
        </Tr>
      </Thead>
      <TableBody>{children}</TableBody>
    </StyledTable>
  );
};

export default Table;
