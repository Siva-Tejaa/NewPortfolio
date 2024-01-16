import { GoHome } from "react-icons/go";
import { GoPerson } from "react-icons/go";
import { IoDocumentTextOutline } from "react-icons/io5";
import { GoProject } from "react-icons/go";
import { RiSendPlaneLine } from "react-icons/ri";

export const navItems = [
  {
    id: 1,
    name: "Home",
    icon: <GoHome fontSize="1.3em" />,
  },
  {
    id: 2,
    name: "Skills",
    icon: <IoDocumentTextOutline fontSize="1.3em" />,
  },
  {
    id: 3,
    name: "Projects",
    icon: <GoProject fontSize="1.3em" />,
  },
  {
    id: 4,
    name: "About",
    icon: <GoPerson fontSize="1.3em" />,
  },
  {
    id: 5,
    name: "Contact",
    icon: <RiSendPlaneLine fontSize="1.3em" />,
  },
];
