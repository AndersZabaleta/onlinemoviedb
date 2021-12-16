import { useNavigate } from "react-router-dom";

import { GoBackContainer, SVG } from "./goBack.styles";

const GoBack = () => {
  const navigate = useNavigate();
  return (
    <GoBackContainer>
      <SVG
        onClick={() => navigate(-1)}
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"
        />
      </SVG>
    </GoBackContainer>
  );
};

export default GoBack;
