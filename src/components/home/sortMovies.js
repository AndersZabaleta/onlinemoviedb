const SortMovies = ({ handleSortByValue }) => {
  return (
    <div>
      <select onChange={(e) => handleSortByValue(e)}>
        <option disabled={true}>Sort by:</option>
        <option value="popularity.desc">Popularity Desc.</option>
        <option value="popularity.asc">Popularity Asc.</option>
        <option value="original_title.asc">Title Desc.</option>
        <option value="original_title.desc">Title Asc.</option>
        <option value="release_date.desc">Release date Desc.</option>
        <option value="release_date.asc">Release date Asc.</option>
      </select>
    </div>
  );
};

export default SortMovies;
