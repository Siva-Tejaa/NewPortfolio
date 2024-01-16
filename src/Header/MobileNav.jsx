import React, { useContext } from "react";
import { navItems } from "../utils/Constants";

import { Context } from "../utils/Context";

const MobileNav = () => {
  const { darkMode, setDarkMode, activeItem, scrollToTarget } =
    useContext(Context);

  return (
    <nav className="w-[100%] p-2 rounded-sm flex items-center justify-between gap-4 fixed bottom-0 bg-white shadow-[0_-1px_4px_rgba(0,0,0,0.15)] laptop:hidden">
      {navItems.map((navItem) => (
        <div
          key={navItem?.id}
          className={
            activeItem === navItem?.name.toLowerCase()
              ? "flex flex-col items-center cursor-pointer text-orange-500"
              : "flex flex-col items-center cursor-pointer"
          }
          onClick={() => scrollToTarget(navItem?.name.toLowerCase())}
        >
          {navItem?.icon}
          <span className="text-sm">{navItem?.name}</span>
        </div>
      ))}
    </nav>
  );
};

export default MobileNav;
