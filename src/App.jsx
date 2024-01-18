import React, { useState } from "react";
import "./App.css";

import Header from "./Header/Header";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Footer from "./Footer/Footer";
import Contact from "./Contact/Contact";

import { Context } from "./utils/Context";
import MobileNav from "./Header/MobileNav";
import About from "./About/About";

const App = () => {
  const [activeItem, setActiveItem] = useState("home");
  const [darkMode, setDarkMode] = useState(false);

  //Scroll to Specific Section in Page
  const scrollToTarget = (targetID) => {
    document.getElementById(targetID).scrollIntoView({ block: "start" });
    setActiveItem(targetID);
  };

  //Light & Dark Mode Functionality
  const setLightDarkTheme = () => {
    setDarkMode(!darkMode);
  };

  //Console Content
  // const consoleStyles = `
  //   font-family: Dancing Script, cursive;
  //   padding: 6px;
  //   background-color:#474BFF;
  //   color:#FFFF;
  //   border-radius:4px;
  //   font-size:26px;
  // `;

  // {
  //   console.log("%c <𝕾𝖎𝖛𝖆 𝕿𝖊𝖏𝖆/>", consoleStyles);
  //   console.log("Welcome to my Portfolio Website. Happy Debugging!");
  // }

  return (
    <div className={darkMode ? "dark" : ""}>
      <Context.Provider
        value={{
          activeItem,
          setActiveItem,
          darkMode,
          scrollToTarget,
          setLightDarkTheme,
        }}
      >
        <Header />
        <MobileNav />
        <main className="bg-background3">
          <Home />
          <Skills />
          <Projects />
          <About />
          <Contact />
        </main>
        <Footer />
      </Context.Provider>
    </div>
  );
};

export default App;
