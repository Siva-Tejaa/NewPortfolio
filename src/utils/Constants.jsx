//NavIcons
import { GoHome, GoPerson, GoProject } from "react-icons/go";
import { IoDocumentTextOutline } from "react-icons/io5";
import { BsSend } from "react-icons/bs";

//AboutMe Icons
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { CgWorkAlt } from "react-icons/cg";
import { BiSupport } from "react-icons/bi";

//Portfolio Image
import PortfolioProfileImage from "../assets/PortfolioProfile.png";

//Resume
import Resume from "../assets/Resume/SivaTeja_Frontend_Developer_4Years.pdf";

//Timeline About
import SVArtsCollege from "../assets/Timeline/SV_Arts_College_Tirupati.png";
import NarayanaEngineeringCollege from "../assets/Timeline/Narayana_Engineering_College_Nellore.png";
import Xoriant from "../assets/Timeline/Xoriant.jpg";
import Infosys from "../assets/Timeline/Infosys.png";

//Contact Page || SocialMedia
import { GoMail } from "react-icons/go";
import { PiPhoneCall, PiShareNetwork } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";

import Facebook from "../assets/SocialMedia/Facebook.png";
import Instagram from "../assets/SocialMedia/Instagram.png";
import Twitter from "../assets/SocialMedia/Twitter.png";
import LinkedIn from "../assets/SocialMedia/LinkedIn.png";
import Whatsapp from "../assets/SocialMedia/Whatsapp.png";
import GithubIcon from "../assets/SocialMedia/Github.png";
import MSTeams from "../assets/SocialMedia/MSTeams.png";

//For Images https://marwin1991.github.io/profile-technology-icons/

//TechStack
import ReactJs from "../assets/TechStack/ReactJs.png";
import NextJS from "../assets/TechStack/NextJS.png";
import JavaScript from "../assets/TechStack/JavaScript.png";
import Redux from "../assets/TechStack/Redux.png";
import ReactQuery from "../assets/TechStack/ReactQuery.png";
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
// import Jira from "../assets/TechStack/Jira.png";
import Postman from "../assets/TechStack/Postman.png";
import CoreJava from "../assets/TechStack/Java.png";

//Projects
import TodoCrud from "../assets/Projects/TodoCrud.png";
import Greeting from "../assets/Projects/Greeting.png";
import Covid19Tracker from "../assets/Projects/Covid19Tracker.png";
import Movies from "../assets/Projects/Movies.png";
import Weather from "../assets/Projects/WeatherNew.png";
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
import JobGenie from "../assets/Projects/JobGenie.png";
import Spotify from "../assets/Projects/Spotify.png";
import MegaMart from "../assets/Projects/MegaMart.png";

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

export const totalExperience = "3.10+";

export const myDescription = `A passionate front-end developer with ${totalExperience} years of experience in
          designing and developing highly responsive websites with elegant and
          efficient code. Currently, I am learning MERN development and
          improving my skills in building responsive full-stack web
          applications.`;

export const aboutMe = [
  {
    icon: <MdOutlineWorkspacePremium fontSize="1.3em" />,
    title: "Experience",
    subtitle: `${totalExperience} Years`,
  },
  {
    icon: <CgWorkAlt fontSize="1.3em" />,
    title: "Completed",
    subtitle: "18+ Projects",
  },
  {
    icon: <BiSupport fontSize="1.3em" />,
    title: "Support",
    subtitle: "Online 24/7",
  },
];

export const timelineData = [
  {
    position: "Sr. Associate Consultant",
    name: "Infosys Limited, Hyderabad",
    location: "Hyderabad",
    state: "Telangana",
    description: "",
    title: "Oct 2024 - Present",
    image: Infosys,
    link: "https://www.infosys.com/",
  },
  {
    position: "Software Engineer",
    name: "Xoriant Solutions Pvt. Ltd., Pune",
    location: "Pune",
    state: "Maharashtra",
    description: "",
    title: "Nov 2022 - Sep 2024",
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
    name: "ReactJS",
    image: ReactJs,
    level: "Advanced",
  },

  {
    name: "NextJS",
    image: NextJS,
    level: "Intermediate",
  },

  {
    name: "JavaScript",
    image: JavaScript,
    level: "Advanced",
  },

  {
    name: "Redux",
    image: Redux,
    level: "Intermediate",
  },

  {
    name: "React Query",
    image: ReactQuery,
    level: "Intermediate",
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
    name: "Tailwind CSS",
    image: TailwindCSS,
    level: "Intermediate",
  },
  {
    name: "ExpressJS",
    image: ExpressJS,
    level: "Advanced",
  },

  {
    name: "NodeJS",
    image: NodeJS,
    level: "Intermediate",
  },
  {
    name: "Mongo DB",
    image: MongoDB,
    level: "Intermediate",
  },

  {
    name: "MySQl",
    image: MySql,
    level: "Intermediate",
  },
  {
    name: "Bootstrap",
    image: Bootstrap,
    level: "Basic",
  },

  {
    name: "Core Java",
    image: CoreJava,
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
  {
    name: "Postman",
    image: Postman,
    level: "Intermediate",
  },
  // {
  //   name: "Jira",
  //   image: Jira,
  //   level: "Advanced",
  // },
];

export const projectsData = [
  {
    id: 1,
    image: TodoCrud,
    title: "Todo/Crud",
    techStack: [ReactJs],
    demo: "https://react-todo-crud-app.stackblitz.io",
    gitRepo:
      "https://stackblitz.com/edit/react-todo-crud-app?file=src%2FApp.js",
    status: "Complete",
  },
  {
    id: 2,
    image: Greeting,
    title: "Greeting",
    techStack: [ReactJs],
    demo: "https://greetings-app.stackblitz.io",
    gitRepo: "https://stackblitz.com/edit/greetings-app?file=src%2FApp.js",
    status: "Complete",
  },
  {
    id: 3,
    image: Covid19Tracker,
    title: "Covid19 Tracker India",
    techStack: [ReactJs],
    demo: "https://covid19-india.stackblitz.io",
    gitRepo: "https://stackblitz.com/edit/covid19-india?file=src%2FApp.js",
    status: "Complete",
  },
  {
    id: 4,
    image: Movies,
    title: "Movies Application",
    techStack: [ReactJs],
    demo: "https://movies-application.stackblitz.io",
    gitRepo: "https://stackblitz.com/edit/movies-application?file=src%2FApp.js",
    status: "Complete",
  },
  {
    id: 5,
    image: Weather,
    title: "Weather",
    techStack: [ReactJs, TailwindCSS],
    demo: "https://weather-app-dashboard.vercel.app/",
    gitRepo: "https://github.com/Siva-Tejaa/Weather-Dashboard",
    status: "Complete",
  },
  {
    id: 6,
    image: Countries,
    title: "Countries",
    techStack: [ReactJs],
    demo: "https://allcountries.stackblitz.io",
    gitRepo: "https://stackblitz.com/edit/allcountries?file=src%2FApp.js",
    status: "Complete",
  },
  {
    id: 7,
    image: CryptoTracker,
    title: "CryptoTracker",
    techStack: [ReactJs],
    demo: "https://crypto-tracker.stackblitz.io",
    gitRepo: "https://stackblitz.com/edit/crypto-tracker?file=src%2FApp.js",
    status: "Complete",
  },
  {
    id: 8,
    image: OldPortfolioWebsite,
    title: "Old Portfolio Website",
    techStack: [ReactJs],
    demo: "https://sivatejaold.vercel.app",
    gitRepo: "https://github.com/Siva-Tejaa/Portfolio",
    status: "Complete",
  },
  {
    id: 9,
    image: PasswordGenerator,
    title: "Password Generator",
    techStack: [ReactJs],
    demo: "https://react-password-generator.stackblitz.io",
    gitRepo:
      "https://stackblitz.com/edit/react-password-generator?file=src%2FApp.js",
    status: "Complete",
  },
  {
    id: 10,
    image: Youtube,
    title: "Simple Youtube App",
    techStack: [ReactJs, TailwindCSS],
    demo: "https://simple-youtube-app.vercel.app/",
    gitRepo: "https://github.com/Siva-Tejaa/Youtube",
    status: "Complete",
  },
  {
    id: 11,
    image: SBConstructions,
    title: "Construction Website",
    techStack: [ReactJs, TailwindCSS],
    demo: "https://sbconstructions.vercel.app/",
    gitRepo: "https://github.com/Siva-Tejaa/sb-constructions",
    status: "Complete",
  },
  {
    id: 12,
    image: iBommaMovies,
    title: "iBomma Movies",
    techStack: [ReactJs, TailwindCSS],
    demo: "https://ibomma-movies-app.vercel.app/",
    gitRepo: "https://github.com/Siva-Tejaa/movies-app",
    status: "Complete",
  },
  {
    id: 13,
    image: SuperKart,
    title: "SuperKart",
    techStack: [ReactJs, Redux, TailwindCSS, Firebase],
    demo: "https://super-kart.vercel.app/",
    gitRepo: "https://github.com/Siva-Tejaa/SuperKart",
    status: "Complete",
  },
  {
    id: 14,
    image: TheBharatNews,
    title: "The Bharat News",
    techStack: [ReactJs, TailwindCSS],
    demo: "https://thebharatnews.vercel.app/",
    gitRepo: "https://github.com/Siva-Tejaa/BharatNews",
    status: "Complete",
  },
  {
    id: 15,
    image: Wedding,
    title: "Indian Wedding",
    techStack: [ReactJs, TailwindCSS],
    demo: "https://indian-wedding.vercel.app/",
    gitRepo: "https://github.com/Siva-Tejaa/marriage",
    status: "In Progress",
  },
  {
    id: 16,
    image: NewPortfolio,
    title: "Portfolio",
    techStack: [ReactJs, TailwindCSS],
    demo: "https://sivateja.vercel.app/",
    gitRepo: "https://github.com/Siva-Tejaa/NewPortfolio",
    status: "Complete",
  },
  {
    id: 17,
    image: JobGenie,
    title: "Job Genie",
    techStack: [ReactJs, TailwindCSS, NodeJS, ExpressJS, MongoDB],
    demo: "https://jobgeniee.vercel.app/",
    gitRepo: "https://github.com/Siva-Tejaa/nodejsjobportal",
    status: "In Progress",
  },
  {
    id: 18,
    image: Spotify,
    title: "Spotify",
    techStack: [ReactJs, Redux, TailwindCSS],
    demo: "https://spotifytunes.vercel.app/",
    gitRepo: "https://github.com/Siva-Tejaa/Spotify",
    status: "In Progress",
  },
  {
    id: 19,
    image: MegaMart,
    title: "MegaMart",
    techStack: [ReactJs, TailwindCSS, NodeJS, ExpressJS, MongoDB],
    demo: "https://megamartt.vercel.app/",
    gitRepo: "https://github.com/Siva-Tejaa/megamart-frontend",
    status: "In Progress",
  },
];

//Contact Page Icons and Social Media Icons

export const contactData = [
  {
    id: 1,
    icon: <SlLocationPin fontSize="1.6em" />,
    name: "Location",
    content: "Andhra Pradesh, India",
    link: "https://maps.app.goo.gl/tn44j4znZzgJLufG8",
  },
  {
    id: 2,
    icon: <GoMail fontSize="1.6em" />,
    name: "Email Me",
    content: "asivateja1999@gmail.com",
    link: "mailto:asivateja1999@gmail.com?subject=Mail From Portfolio Website ",
  },
  {
    id: 3,
    icon: <PiPhoneCall fontSize="1.6em" />,
    name: "Call Me",
    content: "+91 7981203040",
    link: "tel:+917981203040",
  },
];

export const shareIcon = <PiShareNetwork fontSize="1.6em" />;

export const socialMedia = [
  {
    id: 1,
    name: "Facebook",
    icon: Facebook,
    link: "https://www.facebook.com/Sivaa.Teja",
  },
  {
    id: 2,
    name: "Whatsapp",
    icon: Whatsapp,
    link: "https://api.whatsapp.com/send?phone=7981203040&text=Hello!",
  },
  {
    id: 3,
    name: "Instagram",
    icon: Instagram,
    link: "https://www.instagram.com/s.i.v.a_t.e.j.a",
  },
  {
    id: 4,
    name: "Twitter (X)",
    icon: Twitter,
    link: "https://twitter.com/Siva_Tejaa",
  },
  {
    id: 5,
    name: "LinkedIn",
    icon: LinkedIn,
    link: "https://www.linkedin.com/in/siva-tejaa",
  },
  {
    id: 6,
    name: "Github",
    icon: GithubIcon,
    link: "https://github.com/Siva-Tejaa",
  },
  {
    id: 7,
    name: "Microsoft Teams",
    icon: MSTeams,
    link: "https://teams.microsoft.com/l/chat/0/0?users=asivateja1999@gmail.com&message=Hello!",
  },
];
