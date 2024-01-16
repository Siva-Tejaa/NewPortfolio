import React from "react";
import { navItems } from "../utils/Constants";

const MobileNav = () => {
  return (
    <nav className="w-[100%] p-2 border-2 flex items-center justify-between gap-4 absolute bottom-0 laptop:hidden">
      {navItems.map((navItem) => (
        <div key={navItem?.id} className="flex flex-col items-center">
          {navItem?.icon}
          <span className="text-sm">{navItem?.name}</span>
        </div>
      ))}
    </nav>
  );
};

export default MobileNav;
