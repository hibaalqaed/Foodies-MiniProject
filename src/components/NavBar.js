import React from "react";

import { Link } from "react-router-dom";
import { ThemeButton } from "../styles";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav mr-auto">
          <ThemeButton>
            <Link to="/" onClick={() => window.scroll(0, 0)}>
              Home
            </Link>{" "}
          </ThemeButton>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
