import useKnownForQuery from "./services/useKnownForQuery";
import { useState } from "react";

import MoviesKnownFor from "./moviesKnownFor";
import { InputWrapper } from "../../shared/detailView.styled";
const KnownFor = ({ id }) => {
  const { isLoading, error, data } = useKnownForQuery(id);

  return <MoviesKnownFor data={data} isLoading={isLoading} />;
};

export default KnownFor;
