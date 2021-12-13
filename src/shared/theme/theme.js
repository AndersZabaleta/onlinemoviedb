import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    active: "#e0b416",
    header: "#000000",
    detailedInfoBg: "#1F1F1F",
    autompleteBg: "#313131",
    autocompleteHover: "#1A1A1A",
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
