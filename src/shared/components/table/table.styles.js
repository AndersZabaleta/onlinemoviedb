import styled from "styled-components";

export const TBody = styled.div`
  width: 100%;
`;
export const TableWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    /* font-size: 12px; */
    width: 100%;
  }
`;

export const StyledTable = styled.div`
  margin-top: 30px;
  width: 100%;
  color: #b9b9b9;
  font-weight: bold;
  margin-bottom: 30px;
  border: none;
  @media (max-width: 768px) {
    font-size: 12px;
  }
  /*  @media (max-width: 540px) {
    font-size: 10px;
  }
  @media (max-width: 320px) {
    font-size: 8px;
  } */
`;

export const Tr = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  padding-top: 10px;
  padding-bottom: 10px;
  background-color: ${(props) => props.backgroundColor};
`;

export const Td = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Thead = styled.div`
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #353148;
`;
export const Th = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
  background-color: #353148;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const TableImg = styled.img`
  width: 30%;
  @media (max-width: 540px) {
    width: 50%;
  }
`;
