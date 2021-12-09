import { Link } from "react-router-dom";
import { Tr, Td, TableImg } from "./table.styles";
const TableTr = ({
  tableImage,
  name,
  character,
  index,
  id,
  tableLinkValue,
}) => {
  return (
    <Tr backgroundColor={index % 2 === 0 ? "#FDFDFD" : "#F5F5F5"}>
      <Td>
        <Link to={`/p/details/${id}`}>
          {tableImage ? (
            <TableImg
              src={`https://image.tmdb.org/t/p/w500${tableImage}`}
              alt={name}
            />
          ) : (
            <TableImg
              src="https://i.pinimg.com/originals/83/46/bc/8346bcb80380e7f21ba1d7ab8b570d85.png"
              alt={name}
            />
          )}
        </Link>
      </Td>
      <Td>
        <Link to={`/${tableLinkValue}/details/${id}`}>{name} </Link>
      </Td>
      <Td>{character}</Td>
    </Tr>
  );
};

export default TableTr;
