import styled from "styled-components";
import { Link } from "react-router-dom";
const StyledPageButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
`;

const StyledButton = styled.button`
  width: 40px;
  height: 40px;
  margin-right: 2px;
  margin-left: 2px;
  border-radius: 3px;
  border: 1px solid grey;
  box-shadow: 8px 12px 15px -3px #000000;
  background-color: ${(props) => (props.current ? "#E0B416" : "white")};
  &:hover {
    background-color: #e0b416;
    cursor: pointer;
  }
`;

const StyledNextPrevButtons = styled.button`
  width: auto;
  margin-right: 2px;
  margin-left: 2px;
  height: 40px;
  background-color: white;
  border-radius: 3px;
  border: 1px solid grey;
  box-shadow: 8px 12px 15px -3px #000000;
  &:hover {
    background-color: #e0b416;
    cursor: pointer;
  }
`;

const StyledNextPrevButtonsWrapper = styled.div`
          display: "flex";
          justify-ontent: "start";
          width: "50%":
`;

const StyledEllipsis = styled.span`
  align-self: end;
`;
const ListContainer = styled.div`
  display: flex;
  justify-content: center;
`;
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
