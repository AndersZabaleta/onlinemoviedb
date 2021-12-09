import CardImage from "./cardImage";
import GenresPill from "./genresPill";
import { StyledCard, CardTitle, PillsContainer } from "./card.styles";
import { Link } from "react-router-dom";
const Card = ({ dataToShow }) => {
  return (
    <StyledCard>
      <Link to={`/m/details/${dataToShow.id}`}>
        {dataToShow.poster_path ? (
          <CardImage
            src={`https://image.tmdb.org/t/p/w200${dataToShow.poster_path}`}
            alt={dataToShow.title}
          />
        ) : (
          <CardImage
            src="https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
            alt={dataToShow.original_title}
          />
        )}
        <CardTitle>{dataToShow.original_title}</CardTitle>
      </Link>
      <PillsContainer>
        {dataToShow.genres.map((genre) => {
          return <GenresPill genre={genre} />;
        })}
      </PillsContainer>
    </StyledCard>
  );
};

export default Card;
