import { NotFoundContainer } from "./notFound.styles";

const NotFound = () => {
  return (
    <NotFoundContainer>
      <img
        src="https://c.tenor.com/vQzj05zTKm0AAAAC/john-travolta-confused.gif"
        alt="travolta gif"
      />
      <h1>OOOOOPS!</h1>
      <p>This page does not exist</p>
    </NotFoundContainer>
  );
};

export default NotFound;
