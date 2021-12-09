import { Pill } from "./genresPills.styles";

export const PILL_SIZES = {
  S: "S",
  L: "L" 
}

const GenresPill = ({ genreName, pillSize = "S" }) => {
  return (
    <Pill pillSize={pillSize}>
     {genreName}
    </Pill>
  );
};

export default GenresPill;
