import { Tr } from "./table.styles";
const TableTr = ({ index, children }) => {
  return (
    <Tr backgroundColor={index % 2 === 0 ? "#FDFDFD" : "#F5F5F5"}>
      {children}
    </Tr>
  );
};

export default TableTr;
