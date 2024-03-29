import React, { useContext } from "react";
import { navItems } from "../utils/Constants";

import { Context } from "../utils/Context";

const MobileNav = () => {
  const { darkMode, setDarkMode, activeItem, scrollToTarget } =
    useContext(Context);

  return (
    <nav className="w-[100%] z-10 p-2 rounded-sm flex justify-around gap-4 fixed bottom-0 bg-background3 shadow-[0_-1px_4px_rgba(0,0,0,0.15)] dark:bg-darkblack laptop:hidden ">
      {navItems.map((navItem) => (
        <div
          key={navItem?.id}
          className={
            activeItem === navItem?.name.toLowerCase()
              ? "flex flex-1 flex-col items-center cursor-pointer text-primary p-[5px] font-semibold dark:text-darkprimary"
              : "flex flex-1 flex-col items-center cursor-pointer p-[5px] hover:text-primary dark:text-white dark:hover:text-darkprimary"
          }
          onClick={() => scrollToTarget(navItem?.name.toLowerCase())}
        >
          {navItem?.icon}
          <span className="text-xs">{navItem?.name}</span>
        </div>
      ))}
    </nav>
  );
};

export default MobileNav;
