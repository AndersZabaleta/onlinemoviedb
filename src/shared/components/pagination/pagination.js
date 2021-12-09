import { Link } from "react-router-dom";

import {
  StyledPageButtonWrapper,
  StyledUl,
  StyledButton,
  StyledNextPrevButtons,
  StyledNextPrevButtonsWrapper,
  StyledEllipsis,
  ListContainer,
} from "./pagination.styles";
const Pagination = ({
  currentPage,
  onClick,
  totalPages,
  sortByValue,
  genre,
}) => {
  const lastPage = totalPages;
  const hasRightEllipsis = lastPage - currentPage > 3;
  const hasLeftEllipsis = currentPage > 3;
  const pagesToDraw = [...Array(totalPages > 7 ? 7 : totalPages)];

  pagesToDraw[0] = 1;
  pagesToDraw[1] = hasLeftEllipsis ? -1 : 2;
  pagesToDraw[5] = hasRightEllipsis ? -2 : lastPage - 1;
  pagesToDraw[6] = lastPage;

  if (hasLeftEllipsis && hasRightEllipsis) {
    pagesToDraw[2] = currentPage - 1;
    pagesToDraw[3] = currentPage;
    pagesToDraw[4] = currentPage + 1;
  } else if (hasLeftEllipsis) {
    pagesToDraw[2] = lastPage - 4;
    pagesToDraw[3] = lastPage - 3;
    pagesToDraw[4] = lastPage - 2;
  } else {
    pagesToDraw[2] = 3;
    pagesToDraw[3] = 4;
    pagesToDraw[4] = 5;
  }

  return (
    <StyledPageButtonWrapper>
      <StyledNextPrevButtonsWrapper>
        {currentPage === 1 ? (
          <StyledNextPrevButtons disabled={true}>
            Previous
          </StyledNextPrevButtons>
        ) : (
          <Link
            to={`/discover/genre=${genre}/sort_by=${sortByValue}/page/${
              currentPage - 1
            }`}
          >
            <StyledNextPrevButtons
              onClick={() => onClick(currentPage > 1 ? currentPage - 1 : 1)}
              page={currentPage - 1}
            >
              Previous
            </StyledNextPrevButtons>
          </Link>
        )}
        {currentPage === lastPage ? (
          <StyledNextPrevButtons disabled={true}>
            Next page
          </StyledNextPrevButtons>
        ) : (
          <Link
            to={`/discover/genre=${genre}/sort_by=${sortByValue}/page/${
              currentPage + 1
            }`}
          >
            <StyledNextPrevButtons
              onClick={() =>
                onClick(currentPage < totalPages ? currentPage + 1 : totalPages)
              }
              page={currentPage + 1}
            >
              Next page
            </StyledNextPrevButtons>
          </Link>
        )}
      </StyledNextPrevButtonsWrapper>
      <div>
        <ListContainer>
          <StyledUl>
            {pagesToDraw
              .filter((_, i) => i < totalPages)
              .map((page, index) => {
                if (page < 0) {
                  return <StyledEllipsis key={index}>&hellip;</StyledEllipsis>;
                }
                return (
                  <li key={index}>
                    <Link
                      to={`/discover/genre=${genre}/sort_by=${sortByValue}/page/${page}`}
                    >
                      <StyledButton
                        current={page === currentPage}
                        onClick={() => {
                          onClick(page);
                        }}
                        page={page}
                      >
                        {" "}
                        {page}
                      </StyledButton>
                    </Link>
                  </li>
                );
              })}
          </StyledUl>
        </ListContainer>
      </div>
    </StyledPageButtonWrapper>
  );
};

export default Pagination;
