import styled from "styled-components";

export const StyledSpinner = styled.div`
  border: 4px solid ${({ theme: { colors } }) => colors.active};
  border-left-color: transparent;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
