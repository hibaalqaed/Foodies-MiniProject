import "./App.css";

//observer
import { observer } from "mobx-react";

//components
import Routes from "./components/Routes";

import Home from "./components/Home";

//styles
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles";

function App() {
  const theme = {
    mainColor: "white",
    backgroundColor: "#EBE0DF",
    dark: "black",
    button: "#C3A098",
    buttonHover: "DB4620",
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Home />
      <Routes />
    </ThemeProvider>
  );
}

export default observer(App);
