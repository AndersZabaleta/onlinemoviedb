import { useParams, Navigate } from "react-router-dom";
import usePeopleDetailsQuery from "./services/usePeopleDetailsQuery";

import {
  MovieDetailsPage,
  MovieDetailsContainerContainer,
  MovieDetailsContainer,
  MovieDetailsImgContainer,
  InfoContainer,
  DetaildInfoImage,
  BiographyEllipsis,
} from "../../shared/detailView.styled";
import KnownFor from "./knownFor";
const PeopleDetails = () => {
  const { id } = useParams();
  const { isLoading, error, data } = usePeopleDetailsQuery(id);
  console.log(data);
  if (isLoading) return "Loading...";
  if (data.status_code) return <Navigate to="/404" />;
  return (
    <MovieDetailsPage>
      <MovieDetailsContainerContainer>
        <MovieDetailsContainer>
          <MovieDetailsImgContainer>
            <DetaildInfoImage
              src={`https://image.tmdb.org/t/p/w500${data?.profile_path}`}
              alt={data?.name}
            />
          </MovieDetailsImgContainer>
          <InfoContainer>
            <h3>{data?.name}</h3>
            <BiographyEllipsis>Biography: {data?.biography}</BiographyEllipsis>
            <p>Birthday: {data?.birthday}</p>
            <p>Place of birth: {data?.place_of_birth}</p>
            <p>Popularity: {data?.popularity}</p>
            <p>Gender: {data?.gender === 1 ? "Female" : "Male"}</p>
          </InfoContainer>
        </MovieDetailsContainer>
      </MovieDetailsContainerContainer>
      <KnownFor id={id} />
    </MovieDetailsPage>
  );
};

export default PeopleDetails;
