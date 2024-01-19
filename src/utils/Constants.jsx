//NavIcons
import { GoHome } from "react-icons/go";
import { GoPerson } from "react-icons/go";
import { IoDocumentTextOutline } from "react-icons/io5";
import { GoProject } from "react-icons/go";
import { BsSend } from "react-icons/bs";

//Portfolio Image
import PortfolioProfileImage from "../assets/PortfolioProfile.png";

//Resume
import Resume from "../assets/SivaTeja-Resume.pdf";

//Timeline About
import SVArtsCollege from "../assets/Timeline/SV_Arts_College_Tirupati.png";
import NarayanaEngineeringCollege from "../assets/Timeline/Narayana_Engineering_College_Nellore.png";
import Xoriant from "../assets/Timeline/Xoriant.jpg";

//SocialMedia
import Facebook from "../assets/SocialMedia/Facebook.svg";
import Instagram from "../assets/SocialMedia/Instagram.svg";
import Twitter from "../assets/SocialMedia/Twitter.svg";
import LinkedIn from "../assets/SocialMedia/LinkedIn.svg";
import WhatsApp from "../assets/SocialMedia/WhatsApp.svg";

// For SVG's https://colored-icons.vercel.app/

//TechStack
import ReactJs from "../assets/TechStack/ReactJs.svg";
import JavaScript from "../assets/TechStack/JavaScript.svg";
import Redux from "../assets/TechStack/Redux.svg";
import CSS3 from "../assets/TechStack/CSS3.svg";
import Html5 from "../assets/TechStack/Html5.svg";
import Bootstrap from "../assets/TechStack/Bootstrap.svg";
import TailwindCSS from "../assets/TechStack/TailwindCSS.svg";
import MySql from "../assets/TechStack/MySql.svg";
import Firebase from "../assets/TechStack/firebase.svg";
import Github from "../assets/TechStack/GitHub.svg";
import NodeJS from "../assets/TechStack/NodeJS.svg";
import MongoDB from "../assets/TechStack/MongoDB.svg";
import ExpressJS from "../assets/TechStack/ExpressJS.svg";
import Git from "../assets/TechStack/Git.svg";

//Projects

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

export const PortfolioProfile = PortfolioProfileImage;

export const SivaTejaResume = Resume;

export const timelineData = [
  {
    position: "Software Engineer",
    name: "Xoriant Solutions Pvt. Ltd., Pune",
    location: "Pune",
    state: "Maharashtra",
    description: "",
    title: "Nov 2022 - Present",
    image: Xoriant,
    link: "https://www.xoriant.com/",
  },
  {
    position: "Associate Software Engineer",
    name: "Xoriant Solutions Pvt. Ltd., Pune",
    location: "Pune",
    state: "Maharashtra",
    description: "",
    title: "Sep 2021 - Nov 2022",
    image: Xoriant,
    link: "https://www.xoriant.com/",
  },
  {
    position: "Master of Computer Applications",
    name: "Narayana Engineering College, Nellore",
    location: "Nellore",
    state: "Andhra Pradesh",
    description: "",
    title: "Jul 2019 - Sep 2021",
    image: NarayanaEngineeringCollege,
    link: "https://www.necn.ac.in/",
  },
  {
    position: "Bachelour of Science",
    name: "SV Arts College, Tirupati",
    location: "Tirupati",
    state: "Andhra Pradesh",
    description: "",
    title: "Jul 2016 - May 2019",
    image: SVArtsCollege,
    link: "https://svac.tirumala.org/",
  },
];

export const TechStack = [
  {
    name: "ExpressJS",
    image: ExpressJS,
    level: "Basic",
  },

  {
    name: "NodeJS",
    image: NodeJS,
    level: "Basic",
  },

  {
    name: "ReactJS",
    image: ReactJs,
    level: "Advanced",
  },

  {
    name: "JavaScript",
    image: JavaScript,
    level: "Advanced",
  },

  {
    name: "Redux",
    image: Redux,
    level: "Basic",
  },

  {
    name: "HTML",
    image: Html5,
    level: "Advanced",
  },

  {
    name: "CSS",
    image: CSS3,
    level: "Intermediate",
  },

  {
    name: "Bootstrap",
    image: Bootstrap,
    level: "Basic",
  },

  {
    name: "Tailwind CSS",
    image: TailwindCSS,
    level: "Intermediate",
  },

  {
    name: "MySQl",
    image: MySql,
    level: "Intermediate",
  },

  {
    name: "Mongo DB",
    image: MongoDB,
    level: "Basic",
  },
  {
    name: "Git Hub",
    image: Github,
    level: "Intermediate",
  },

  {
    name: "Firebase",
    image: Firebase,
    level: "Basic",
  },

  {
    name: "Git",
    image: Git,
    level: "Intermediate",
  },
];
