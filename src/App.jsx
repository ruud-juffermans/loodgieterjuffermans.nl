import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import getTheme from "@theme";
import AppRoutes from "@router";
import GlobalStyles from "@theme/GlobalStyles";

/** Theme and routes. The router itself is provided by the entry file. */
const App = () => {
  const theme = createTheme(getTheme("light"));
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;
