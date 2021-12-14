import { Link } from "react-router-dom";
import Table from "../../shared/components/table";

import TableBody from "../../shared/components/table/tableBody";
import TableTr from "../../shared/components/table/tableTr";
import Spinner from "../../shared/components/spinner";
import { TableWrapper } from "../../shared/common/styles";
import { TableImg, Td } from "../../shared/components/table/table.styles";
const MoviesKnownFor = ({ data, isLoading }) => {
  if (isLoading) return <Spinner />;
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
                        src="https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
                        alt={title}
                      />
                    )}
                  </Link>
                </Td>
                <Td>
                  <Link to={`/m/details/${id}`}>{title} </Link>
                </Td>
                <Td>{character ? character : "Unknown"}</Td>
              </TableTr>
            );
          })}
        </TableBody>
      </Table>
    </TableWrapper>
  );
};

export default MoviesKnownFor;
