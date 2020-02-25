import React from "react";
import "./App.css";

// Components
import NavBar from "./Components/NavBar";

// Material UI
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// import "typeface-roboto";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3cb371"
    },
    secondary: {
      main: "#AD7994"
    }
  }
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <NavBar />
      </ThemeProvider>
    </div>
  );
}

export default App;
