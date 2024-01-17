import React, { useState } from "react";
import "./App.css";

import Header from "./Header/Header";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Footer from "./Footer/Footer";
import Contact from "./Contact/Contact";

import { Context } from "./utils/Context";
import MobileNav from "./Header/MobileNav";
import About from "./About/About";
import Home from "./Home/Home";

const App = () => {
  const [activeItem, setActiveItem] = useState("home");
  const [darkMode, setDarkMode] = useState(true);

  const scrollToTarget = (targetID) => {
    document.getElementById(targetID).scrollIntoView({ block: "start" });
    setActiveItem(targetID);
  };

  const consoleStyles = `
    font-family: Dancing Script, cursive;
    padding: 6px;
    background-color:#474BFF;
    color:#FFFF;
    border-radius:4px;
    font-size:26px;
  `;

  {
    console.log("%c <𝕾𝖎𝖛𝖆 𝕿𝖊𝖏𝖆/>", consoleStyles);
    console.log("Welcome to my Portfolio Website. Happy Debugging!");
  }

  return (
    <Context.Provider
      value={{
        activeItem,
        setActiveItem,
        darkMode,
        setDarkMode,
        scrollToTarget,
      }}
    >
      <Header />
      <MobileNav />
      <main className="p-2">
        <Home />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </Context.Provider>
  );
};

export default App;
