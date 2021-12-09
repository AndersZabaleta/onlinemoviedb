import { useParams, Navigate } from "react-router-dom";
import usePeopleDetailsQuery from "./services/usePeopleDetailsQuery";
import DetailedInfo from "../../shared/components/detailedInfo/detailedInfo";
import { MovieDetailsPage } from "../../shared/detailView.styled";
import KnownFor from "./knownFor";
const PeopleDetails = () => {
  const { id } = useParams();
  const { isLoading, data } = usePeopleDetailsQuery(id);
  console.log(data);
  if (isLoading) return "Loading...";
  if (data.status_code) return <Navigate to="/404" />;
  return (
    <MovieDetailsPage>
      <DetailedInfo
        infoType="people"
        infoImg={data.profile_path}
        name={data.name}
        description={data.biography}
        birthday={data.birthday}
        placeOfBirth={data.place_of_birth}
        popularity={data.popularity}
        gender={data?.gender === 1 ? "Female" : "Male"}
      />

      <KnownFor id={id} />
    </MovieDetailsPage>
  );
};

export default PeopleDetails;
