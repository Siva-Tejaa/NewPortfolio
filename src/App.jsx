import React, { useState } from "react";
import "./App.css";

import Header from "./Header/Header";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Footer from "./Footer/Footer";
import Contact from "./Contact/Contact";

import { Context } from "./utils/Context";
import MobileNav from "./Header/MobileNav";

const App = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const [darkMode, setDarkMode] = useState(true);

  return (
    <Context.Provider
      value={{ activeItem, setActiveItem, darkMode, setDarkMode }}
    >
      <Header />
      <MobileNav />
      <main>
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </Context.Provider>
  );
};

export default App;
