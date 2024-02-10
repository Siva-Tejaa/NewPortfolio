//NavIcons
import { GoHome, GoPerson, GoProject } from "react-icons/go";
import { IoDocumentTextOutline } from "react-icons/io5";
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

//For Images https://marwin1991.github.io/profile-technology-icons/

//TechStack
import ReactJs from "../assets/TechStack/ReactJs.png";
import JavaScript from "../assets/TechStack/JavaScript.png";
import Redux from "../assets/TechStack/Redux.png";
import CSS3 from "../assets/TechStack/CSS3.png";
import Html5 from "../assets/TechStack/Html5.png";
import Bootstrap from "../assets/TechStack/Bootstrap.png";
import TailwindCSS from "../assets/TechStack/TailwindCSS.png";
import MySql from "../assets/TechStack/MySql.png";
import Firebase from "../assets/TechStack/Firebase.png";
import Github from "../assets/TechStack/GitHub.png";
import NodeJS from "../assets/TechStack/NodeJS.png";
import MongoDB from "../assets/TechStack/MongoDB.png";
import ExpressJS from "../assets/TechStack/ExpressJS.png";
import Git from "../assets/TechStack/Git.png";

//Projects
import TodoCrud from "../assets/Projects/TodoCrud.png";
import Greeting from "../assets/Projects/Greeting.png";
import Covid19Tracker from "../assets/Projects/Covid19Tracker.png";
import Movies from "../assets/Projects/Movies.png";
import Weather from "../assets/Projects/Weather.png";
import Countries from "../assets/Projects/Countries.png";
import CryptoTracker from "../assets/Projects/CryptoTracker.png";
import OldPortfolioWebsite from "../assets/Projects/OldPortfolioWebsite.png";
import PasswordGenerator from "../assets/Projects/PasswordGenerator.png";
import Youtube from "../assets/Projects/Youtube.png";
import SBConstructions from "../assets/Projects/SBConstructions.png";
import iBommaMovies from "../assets/Projects/iBommaMovies.png";
import SuperKart from "../assets/Projects/SuperKart.png";
import TheBharatNews from "../assets/Projects/TheBharatNews.png";
import Wedding from "../assets/Projects/Wedding.png";
import NewPortfolio from "../assets/Projects/NewPortfolio.png";

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

export const techStack = [
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

export const projectsData = [
  {
    id: 1,
    image: TodoCrud,
    title: "Todo/Crud",
    techStack: "react",
    demo: "https://react-todo-crud-app.stackblitz.io",
    gitRepo: "",
    status: "Complete",
  },
  {
    id: 2,
    image: Greeting,
    title: "Greeting",
    techStack: "react",
    demo: "https://greetings-app.stackblitz.io",
    gitRepo: "",
    status: "Complete",
  },
  {
    id: 3,
    image: Covid19Tracker,
    title: "Covid19 Tracker India",
    techStack: "react",
    demo: "https://covid19-india.stackblitz.io",
    gitRepo: "",
    status: "Complete",
  },
  {
    id: 4,
    image: Movies,
    title: "Movies Application",
    techStack: "react",
    demo: "https://movies-application.stackblitz.io",
    gitRepo: "",
    status: "Complete",
  },
  {
    id: 5,
    image: Weather,
    title: "Weather",
    techStack: "react",
    demo: "https://city-weather.stackblitz.io",
    gitRepo: "",
    status: "Complete",
  },
  {
    id: 6,
    image: Countries,
    title: "Countries",
    techStack: "react",
    demo: "https://allcountries.stackblitz.io",
    gitRepo: "",
    status: "Complete",
  },
  {
    id: 7,
    image: CryptoTracker,
    title: "CryptoTracker",
    techStack: "react",
    demo: "https://crypto-tracker.stackblitz.io",
    gitRepo: "",
    status: "Complete",
  },
  {
    id: 8,
    image: OldPortfolioWebsite,
    title: "Old Portfolio Website",
    techStack: "react",
    demo: "https://sivateja.stackblitz.io",
    gitRepo: "",
    status: "Complete",
  },
  {
    id: 9,
    image: PasswordGenerator,
    title: "Password Generator",
    techStack: "react",
    demo: "https://react-password-generator.stackblitz.io",
    gitRepo: "",
    status: "Complete",
  },
  {
    id: 10,
    image: Youtube,
    title: "Simple Youtube App",
    techStack: "react",
    demo: "https://simple-youtube-app.vercel.app/",
    gitRepo: "",
    status: "Complete",
  },
  {
    id: 11,
    image: SBConstructions,
    title: "Construction Website",
    techStack: "react",
    demo: "https://sbconstructions.vercel.app/",
    gitRepo: "",
    status: "Complete",
  },
  {
    id: 12,
    image: iBommaMovies,
    title: "iBomma Movies",
    techStack: "react",
    demo: "https://ibomma-movies-app.vercel.app/",
    gitRepo: "",
    status: "Complete",
  },
  {
    id: 13,
    image: SuperKart,
    title: "SuperKart",
    techStack: "react",
    demo: "https://super-kart.vercel.app/",
    gitRepo: "",
    status: "Complete",
  },
  {
    id: 14,
    image: TheBharatNews,
    title: "The Bharat News",
    techStack: "react",
    demo: "https://thebharatnews.vercel.app/",
    gitRepo: "",
    status: "Complete",
  },
  {
    id: 15,
    image: Wedding,
    title: "Indian Wedding",
    techStack: "react",
    demo: "https://indian-wedding.vercel.app/",
    gitRepo: "",
    status: "In Progress",
  },
  {
    id: 16,
    image: NewPortfolio,
    title: "Portfolio",
    techStack: "react",
    demo: "https://sivatejanew.vercel.app/",
    gitRepo: "",
    status: "In Progress",
  },
];
