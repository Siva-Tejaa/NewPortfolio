import React from "react";
import "./Footer.css";

const Footer = () => {
  const date = new Date();

  return (
    <footer className="bg-background3 shadow-[0_-1px_4px_#00000026] text-gray-400 flex flex-col gap-1 items-center justify-center p-6 text-sm pb-20 laptop:pb-6 dark:bg-[#3C4042]">
      <div>Copyright &copy; {date.getFullYear()} | All Rights Reserved</div>
      <div>Made with ❤️ by Siva Teja</div>
    </footer>
  );
};

export default Footer;
