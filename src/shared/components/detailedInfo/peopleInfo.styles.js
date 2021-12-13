import styled from "styled-components";
import FormatDate from "../../hooks/formatDate";
export const BiographyEllipsis = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const StyledFormatedDate = styled(FormatDate).attrs({ tag: "span" })`
  color: white;
`;
