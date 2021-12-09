import { useParams, Navigate } from "react-router-dom";
import usePeopleDetailsQuery from "./services/usePeopleDetailsQuery";
import DetailedInfo from "../../shared/components/detailedInfo";
import KnownFor from "./knownFor";
import { DetailPage } from "../../shared/common/styles";
const PeopleDetails = () => {
  const { id } = useParams();
  const { isLoading, data } = usePeopleDetailsQuery(id);

  if (isLoading) return "Loading...";
  if (data.status_code) return <Navigate to="/404" />;
  return (
    <DetailPage>
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
    </DetailPage>
  );
};

export default PeopleDetails;
