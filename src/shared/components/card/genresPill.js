import { Pill } from "./genresPills.styles";

const GenresPill = ({ genre }) => {
  return <Pill>{genre.name}</Pill>;
};

export default GenresPill;
