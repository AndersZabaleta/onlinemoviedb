import styled from "styled-components";

const DropdownWrapper = styled.div`
  background-color: transparent;
  /*  &:hover {
    background-color: #e0b416;
  } */
`;

const DropDown = styled.select`
  outline: none;
  border: none;
  /*  &:hover {
    background-color: #e0b416;
  } */
`;

const Genres = ({ data, handleGenre }) => {
  return (
    <DropdownWrapper>
      <DropDown onChange={(e) => handleGenre(e)}>
        <option disabled={true}>Choose a genre:</option>
        {data.map((genre) => (
          <option value={genre.id}>{genre.name}</option>
        ))}
      </DropDown>
    </DropdownWrapper>
  );
};

export default Genres;
