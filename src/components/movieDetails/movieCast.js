import useMovieCastQuery from "./services/useMovieCastQuery";
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

const MovieCast = ({ id }) => {
  const { isLoading, error, data } = useMovieCastQuery(id);
  if (isLoading) return "Loading...";
  if (error) return "There was an error " + error.message;
  return (
    <TableWrapper>
      <Table>
        <Thead>
          <Tr>
            <Th>Image</Th>
            <Th>Name</Th>
            <Th>Character</Th>
          </Tr>
        </Thead>
        <TBody>
          {data.map((actor, index) => {
            return (
              <Tr
                backgroundColor={index % 2 === 0 ? "#FDFDFD" : "#F5F5F5"}
                key={actor.id}
              >
                <Td>
                  <Link to={`/p/details/${actor.id}`}>
                    {actor.profile_path ? (
                      <TableImg
                        /* style={{ width: 100 }} */
                        src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                        alt={actor.name}
                      />
                    ) : (
                      <TableImg
                        /*   style={{ width: 100 }} */
                        src="https://i.pinimg.com/originals/83/46/bc/8346bcb80380e7f21ba1d7ab8b570d85.png"
                        alt={actor.name}
                      />
                    )}
                  </Link>
                </Td>
                <Td>
                  <Link to={`/p/details/${actor.id}`}>{actor.name}</Link>
                </Td>
                <Td>{actor.character ? actor.character : "Unknown"}</Td>
              </Tr>
            );
          })}
        </TBody>
      </Table>
    </TableWrapper>
  );
};

export default MovieCast;
