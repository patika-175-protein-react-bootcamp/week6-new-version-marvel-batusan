import React from "react";

import banner from "../assets/marvel-bg.svg";
import MarvelLogo from "../assets/marvel.svg";

function Header() {
  return (
    <header id="bg-section">
      <img src={banner} alt="Marvel Background" />
      <img id="marvel-text" src={MarvelLogo} alt="Marvel Logo" />
    </header>
  );
}

export default Header;
