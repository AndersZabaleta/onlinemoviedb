import { Link } from "react-router-dom";
import Table from "../../shared/components/table";

import TableBody from "../../shared/components/table/tableBody";
import TableTr from "../../shared/components/table/tableTr";

import { TableWrapper } from "../../shared/common/styles";
import { TableImg, Td } from "../../shared/components/table/table.styles";
const MoviesKnownFor = ({ data, isLoading }) => {
  if (isLoading) return "Loading...";
  return (
    <TableWrapper>
      <Table>
        <TableBody>
          {data.map(({ id, poster_path, title, character }, index) => {
            return (
              <TableTr index={index}>
                <Td>
                  <Link to={`/m/details/${id}`}>
                    {poster_path ? (
                      <TableImg
                        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                        alt={title}
                      />
                    ) : (
                      <TableImg
                        src="https://i.pinimg.com/originals/83/46/bc/8346bcb80380e7f21ba1d7ab8b570d85.png"
                        alt={title}
                      />
                    )}
                  </Link>
                </Td>
                <Td>
                  <Link to={`/m/details/${id}`}>{title} </Link>
                </Td>
                <Td>{character}</Td>
              </TableTr>
            );
          })}
        </TableBody>
      </Table>
    </TableWrapper>
  );
};

export default MoviesKnownFor;
