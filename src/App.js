import "./App.css";
import { Link } from "react-router-dom";

//observer
import { observer } from "mobx-react";

//components
import Routes from "./components/Routes";

import Home from "./components/Home";

//styles
import { ThemeProvider } from "styled-components";
import { GlobalStyle, ButtonStyledFlex } from "./styles";
import NavBar from "./components/NavBar";

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
      <div className="displayflex">
        <Link to="/categories">
          <ButtonStyledFlex onClick={() => window.scroll(0, 1000)}>
            Categories
          </ButtonStyledFlex>
        </Link>
        <Link to="/ingredients">
          <ButtonStyledFlex onClick={() => window.scroll(0, 1000)}>
            Ingredients
          </ButtonStyledFlex>
        </Link>

        <Link to="/recipes">
          <ButtonStyledFlex onClick={() => window.scroll(0, 1000)}>
            Recipes
          </ButtonStyledFlex>
        </Link>
      </div>
      <NavBar />
      <Routes />
    </ThemeProvider>
  );
}

export default observer(App);
