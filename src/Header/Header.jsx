import React from "react";
import "./Header.css";

import { navItems } from "../utils/Constants";

const Header = () => {
  return (
    <header className="p-3">
      <h1
        className="text-4xl"
        style={{ fontFamily: "'Dancing Script', cursive" }}
      >
        {"<Siva Teja/>"}
      </h1>
    </header>
  );
};

export default Header;
