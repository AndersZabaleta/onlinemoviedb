import CardImage from "./cardImage";
import GenresPill from "../genresPill/genresPill";
import {
  StyledCard,
  CardTitle,
  PillsContainer,
  StyledLink,
} from "./card.styles";

const Card = ({ imgUrl, name, genres, objectId }) => {
  return (
    <StyledCard>
      <StyledLink to={`/m/details/${objectId}`}>
        {imgUrl ? (
          <CardImage
            src={`https://image.tmdb.org/t/p/w200${imgUrl}`}
            alt={name}
          />
        ) : (
          <CardImage
            src="https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
            alt={name}
          />
        )}
        <CardTitle>{name}</CardTitle>
      </StyledLink>
      <PillsContainer>
        {genres.map((genre) => {
          return (
            <GenresPill key={genre.id}  genreName={genre.name} />
          );
        })}
      </PillsContainer>
    </StyledCard>
  );
};

export default Card;
