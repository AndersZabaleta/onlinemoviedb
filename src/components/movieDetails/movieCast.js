import useMovieCastQuery from "./services/useMovieCastQuery";
import Table from "../../shared/components/table";
import { TableWrapper } from "../../shared/common/styles";
import { TableImg, Td } from "../../shared/components/table/table.styles";
import TableBody from "../../shared/components/table/tableBody";
import TableTr from "../../shared/components/table/tableTr";
import { Link } from "react-router-dom";

const MovieCast = ({ id }) => {
  const { isLoading, error, data } = useMovieCastQuery(id);
  if (isLoading) return "Loading...";
  if (error) return "There was an error " + error.message;

  return (
    <TableWrapper>
      <Table>
        <TableBody>
          {data.map(({ id, profile_path, name, character }, index) => {
            return (
              <TableTr index={index}>
                <Td>
                  <Link to={`/p/details/${id}`}>
                    {profile_path ? (
                      <TableImg
                        src={`https://image.tmdb.org/t/p/w500${profile_path}`}
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
                  <Link to={`/p/details/${id}`}>{name} </Link>
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

export default MovieCast;
