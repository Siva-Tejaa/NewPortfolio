import { AiTwotoneHome } from "react-icons/ai";
import { BsCalendar2EventFill } from "react-icons/bs";
import { MdPeopleAlt } from "react-icons/md";
import { IoMdPhotos } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

export const navItems = [
  {
    id: 1,
    name: "Home",
    icon: <AiTwotoneHome fontSize="1.3em" />,
  },
  {
    id: 2,
    name: "Events",
    icon: <BsCalendar2EventFill fontSize="1.2em" />,
  },
  {
    id: 3,
    name: "Contact",
    icon: <MdPeopleAlt fontSize="1.4em" />,
  },
  {
    id: 4,
    name: "Gallery",
    icon: <IoMdPhotos fontSize="1.3em" />,
  },
  {
    id: 5,
    name: "Venue",
    icon: <FaLocationDot fontSize="1.3em" />,
  },
];
