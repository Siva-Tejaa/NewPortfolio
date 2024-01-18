import React, { useContext } from "react";
import "./Header.css";

import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

import { Context } from "../utils/Context";

import { navItems } from "../utils/Constants";

const Header = () => {
  const { darkMode, activeItem, scrollToTarget, setLightDarkTheme } =
    useContext(Context);

  return (
    <header className="px-4 py-3 flex items-center justify-between bg-background3 shadow-sm dark:bg-[#0F172A] dark:text-white">
      <h1
        className="text-3xl text-primary cursor-pointer"
        style={{
          fontFamily: "'Dancing Script', cursive",
          filter: "drop-shadow(1px 0px 0px #474BFF)",
        }}
        onClick={() => scrollToTarget("home")}
      >
        {"<Siva Teja/>"}
      </h1>
      <div className="flex items-center justify-around laptop:gap-10 desktop:gap-12">
        <nav className="hidden tablet:hidden laptop:flex items-center justify-between gap-8 desktop:gap-10">
          {navItems.map((navItem) => (
            <div
              key={navItem?.id}
              onClick={() => scrollToTarget(navItem?.name.toLowerCase())}
              className={
                activeItem === navItem?.name.toLowerCase()
                  ? "cursor-pointer text-primary"
                  : "cursor-pointer hover:text-primary"
              }
            >
              {navItem?.name}
            </div>
          ))}
        </nav>
        <div
          onClick={setLightDarkTheme}
          title="Toggle Theme"
          className="cursor-pointer border-2 p-[3px] rounded-xl text-primary"
        >
          {darkMode ? (
            <MdOutlineDarkMode fontSize="1.6em" />
          ) : (
            <MdOutlineLightMode fontSize="1.6em" />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
