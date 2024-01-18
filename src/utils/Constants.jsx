import { GoHome } from "react-icons/go";
import { GoPerson } from "react-icons/go";
import { IoDocumentTextOutline } from "react-icons/io5";
import { GoProject } from "react-icons/go";
import { BsSend } from "react-icons/bs";

//Images
import PortfolioProfileImage from "../assets/PortfolioProfile.png";

//Resume
import Resume from "../assets/SivaTeja-Resume.pdf";

export const PortfolioProfile = PortfolioProfileImage;
export const SivaTejaResume = Resume;

export const navItems = [
  {
    id: 1,
    name: "Home",
    icon: <GoHome fontSize="1.3em" />,
  },
  {
    id: 2,
    name: "About",
    icon: <GoPerson fontSize="1.3em" />,
  },
  {
    id: 3,
    name: "Skills",
    icon: <IoDocumentTextOutline fontSize="1.3em" />,
  },
  {
    id: 4,
    name: "Projects",
    icon: <GoProject fontSize="1.3em" />,
  },
  {
    id: 5,
    name: "Contact",
    icon: <BsSend fontSize="1.3em" />,
  },
];
