import {
  Table,
  TableWrapper,
  Tr,
  Td,
  Th,
  Thead,
  TBody,
  TableImg,
} from "../../shared/detailView.styled";
import { Link } from "react-router-dom";
const MoviesKnownFor = ({ data, isLoading }) => {
  if (isLoading) return "Loading...";
  return (
    <TableWrapper>
      <Table>
        <Thead>
          <Tr>
            <Th>Poster</Th>
            <Th>Movie</Th>
            <Th>Character</Th>
          </Tr>
        </Thead>
        <TBody>
          {data.map((movie, index) => {
            return (
              <Tr
                backgroundColor={index % 2 === 0 ? "#FDFDFD" : "#F5F5F5"}
                key={movie.id}
              >
                <Td>
                  <Link to={`/m/details/${movie.id}`}>
                    {movie.poster_path ? (
                      <TableImg
                        /* style={{ width: 100 }} */
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                      />
                    ) : (
                      <TableImg
                        /* style={{ width: 100 }} */
                        src="https://i.pinimg.com/originals/83/46/bc/8346bcb80380e7f21ba1d7ab8b570d85.png"
                        alt={movie.title}
                      />
                    )}
                  </Link>
                </Td>
                <Td>
                  <Link to={`/m/details/${movie.id}`}>{movie.title}</Link>
                </Td>
                <Td>{movie.character ? movie.character : "Unknown"}</Td>
              </Tr>
            );
          })}
        </TBody>
      </Table>
    </TableWrapper>
  );
};

export default MoviesKnownFor;
