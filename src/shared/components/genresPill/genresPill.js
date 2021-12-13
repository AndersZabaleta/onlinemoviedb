import { Pill } from "./genresPills.styles";

const GenresPill = ({ genreName, pillSize = "S" }) => {
  return <Pill pillSize={pillSize}>{genreName}</Pill>;
};

export default GenresPill;
