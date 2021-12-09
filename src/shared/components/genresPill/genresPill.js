import { Pill } from "./genresPills.styles";

const GenresPill = ({ genreName, pillSize }) => {
  return (
    <Pill pillSize={pillSize}>
      <p>{genreName}</p>
    </Pill>
  );
};

export default GenresPill;
