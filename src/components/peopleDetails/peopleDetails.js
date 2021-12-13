import { useParams, Navigate } from "react-router-dom";
import usePeopleDetailsQuery from "./services/usePeopleDetailsQuery";
import DetailedInfo from "../../shared/components/detailedInfo";
import PeopleInfo from "../../shared/components/detailedInfo/peopleInfo";
import KnownFor from "./knownFor";
import { DetailPage } from "../../shared/common/styles";
const PeopleDetails = () => {
  const { id } = useParams();
  const { isLoading, data } = usePeopleDetailsQuery(id);

  if (isLoading) return "Loading...";
  if (data.status_code) return <Navigate to="/404" />;

  const {
    profile_path,
    name,
    biography,
    birthday,
    place_of_birth,
    popularity,
    gender,
  } = data;

  return (
    <DetailPage>
      <DetailedInfo
        infoImg={
          profile_path
            ? `https://image.tmdb.org/t/p/w400${profile_path}`
            : "https://i.pinimg.com/originals/83/46/bc/8346bcb80380e7f21ba1d7ab8b570d85.png"
        }
        name={name}
      >
        <PeopleInfo
          name={name}
          description={biography}
          birthday={birthday}
          placeOfBirth={place_of_birth}
          popularity={popularity}
          gender={gender === 1 ? "Female" : "Male"}
        />
      </DetailedInfo>

      <KnownFor id={id} />
    </DetailPage>
  );
};

export default PeopleDetails;
