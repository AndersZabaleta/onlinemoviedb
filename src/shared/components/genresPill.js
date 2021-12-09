import { Pill } from "./genresPills.styles";

const GenresPill = ({ genreName, pillWidth }) => {
  return <Pill pillWidth={pillWidth}>{genreName}</Pill>;
};

export default GenresPill;
