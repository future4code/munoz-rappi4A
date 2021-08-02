import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#e86e5a",
      constrastText: "black",
    },
    secondary: {
      main: "#ffffff",
      constrastText: "#c0c0c0",
    },
  },
});

export default theme;
