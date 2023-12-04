import adobexdicon from "../../assets/icons/adobexdicon.svg";
import canvaicon from "../../assets/icons/canvaicon.svg";
import figmaicon from "../../assets/icons/figmaicon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import nextjsicon from "../../assets/icons/nextjsicon.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
import mongodbicon from "../../assets/icons/mongoicon.svg";
import vuejsicon from "../../assets/icons/vueicon.svg";
import expressicon from "../../assets/icons/expressicon.svg";
import pythonicon from "../../assets/icons/pythonicon.svg";
import apiicon from "../../assets/icons/apiicon.svg";
import axiosicon from "../../assets/icons/axiosicon.svg";
import jwticon from "../../assets/icons/jwticon.svg";
import darticon from "../../assets/icons/darticon.svg";
import blendericon from "../../assets/icons/blendericon.svg";
import luaicon from "../../assets/icons/luaicon.svg";
import NetflixApp from "../../assets/img/NetflixApp.webp";
import FiveM from "../../assets/img/FiveM.webp";
import UpgradeCut from "../../assets/img/BarberShop.webp";
import TodoApp from "../../assets/img/TodoApp.webp";
import profilepicture from "../img/me.png";
import caricon from "../../assets/icons/car-icon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import nextjsiconwhite from "../../assets/icons/nextjsiconwhite.svg";
import expressiconwhite from "../../assets/icons/expressiconwhite.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";

export const headerIntroData = {
  title: {
    en: "Hi, I'm Finhas Ali",
  },
  subtitle: "Fullstack Developer ",
  description: {
    en: "I'm Finhas Ali, a fullstack developer , UI/UX Designer, Developers, Entrepreneur. Also I am an Electrical & Electronics Student. My Aim is to Conquer this Matrix with Unique thoughts & Ideas.",
  },
  buttons: [
    {
      name: "Contact",
      label: {
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: {
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "Netflix Clone App",
    description_EN:
      "The Netflix Clone App is a responsive and user-friendly web application built using ReactJS, designed to mimic the popular streaming service Netflix. This project aims to showcase the power of ReactJS in creating dynamic and interactive user interfaces for media streaming applications.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "REST Api", icon: apiicon },
      { name: "React", icon: reacticon },
      { name: "Figma", icon: figmaicon }
    ],
    image: NetflixApp,
    deploymenturl: "https://f-nh-s.github.io/Netflix-App/",
    githuburl: "https://github.com/F-Nh-S/Netflix-App",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Todo App",
    description_EN:
      "The ReactJS Todo App is a simple and intuitive web application designed for effective task management. This project demonstrates the fundamental concepts of React, including component-based architecture, state management, and user interaction.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
    ],
    image: TodoApp,
    deploymenturl: "https://f-nh-s.github.io/TodoApp/",
    githuburl:
      "https://github.com/F-Nh-S/TodoApp",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  {
    title: "FiveM RP Server Website",
    description_EN:
      "The FiveM Server Website built with ReactJS is a comprehensive platform designed to enhance the experience of players and administrators in the popular multiplayer modification framework for Grand Theft Auto V, known as FiveM. This project aims to provide a dynamic and user-friendly interface for accessing server information, statistics, and engaging with the gaming community.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      { name: "JWT & Bcrypt", icon: jwticon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Express", icon: expressiconwhite },
      { name: "Node.js", icon: nodejsicon },
      { name: "Figma", icon: figmaicon },
    ],
    image: FiveM,
    deploymenturl: "https://samrajyam.in/",
    githuburl: "https://github.com/F-Nh-S/FiveM-Website",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
    
  },
  {
    title: "UpgradeCut.com",
    description_EN:
      "The Barber Shop Website crafted with ReactJS is a modern and visually appealing online platform tailored for barbershops and their clientele. This project is designed to provide an intuitive and interactive web experience, showcasing the salon's services, facilitating appointment scheduling, and creating an engaging online presence.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      { name: "JWT & Bcrypt", icon: jwticon },
      { name: "Axios", icon: axiosicon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Express", icon: expressiconwhite },
      { name: "Node.js", icon: nodejsicon },
      { name: "Figma", icon: figmaicon },
    ],
    image: UpgradeCut,
    deploymenturl: "https://upgradecut.com/",
    githuburl: "https://github.com/F-Nh-S/Barber-Shop",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
] as const;

export const liveTickerData = {
  content: {
    en: "More Projects on Github",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "WebDevelopment",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Next.js",
        hash: "#Next.js",
        icon: [nextjsicon, nextjsiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },
      {
        title: "MongoDB",
        hash: "#MongoDB",
        icon: mongodbicon,
        color: "#449C45",
      },
      {
        title: "Vue.js",
        hash: "#Vue.js",
        icon: vuejsicon,
        color: "#4FC08D",
      },
      {
        title: "Express",
        hash: "#Express",
        icon: [expressicon, expressiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "Python",
        hash: "#Python",
        icon: pythonicon,
        color: "#61DAFB",
      },
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Design",
    skills: [
      { title: "Figma", hash: "#Figma", icon: figmaicon, color: "#F24E1E" },
      {
        title: "Adobe XD",
        hash: "#Adobe XD",
        icon: adobexdicon,
        color: "#FF61F6",
      },
      { title: "Canva", hash: "#Canva", icon: canvaicon, color: "#00C4CC" },
    ],
  },
] as const;

export const skillsDataCMS = [
  {
    skillsTitle: "Other",
    skills: [
      {
        title: "Dart",
        hash: "#Dart",
        icon: darticon,
        color: "#21759B",
      },
      {
        title: "Blender",
        hash: "#Blender",
        icon: blendericon,
        color: "#F1662A",
      },
      {
        title: "LUA",
        hash: "#LUA",
        icon: luaicon,
        color: "#4353FF",
      },
    ],
  },
] as const;

export const navLinks = [
  { en: "Home", hash: "#home", icon: GoHome },
  { en: "Skills", hash: "#skills", icon: GoStack },
  {  en: "Projects", hash: "#projects", icon: GoProject },
  {  en: "About me", hash: "#about-me", icon: GoPerson },
  { en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  { en: "Imprint", hash: "#imprint", data: <Imprint /> },
  { en: "Privacy", hash: "#privacy", data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: "",
  text: "FNhSAli",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/finhas-ali-517ba1292/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/F-Nh-S",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:fnhsaliktpm10@com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    en: `"Any fool can write code that a computer can understand. Good programmers write code that humans can understand."`,
    author: "Martin Fowler",
  },
  {
    en: `"You can't use up creativity. The more you use, the more you have."`,
  },
] as const;

export const aboutMeData = {
  title_EN: "About me",
  description_EN: "My Education Qualifications",
  paragraphs_EN: [
    {
      title: "Lower Primary",
      description:
        "*St. Joseph E.M.L.P School* Left in 2015",
      icon: hardwareicon,
    },
    {
      title: "High School & Higher Secondary",
      description:
        "*Ideal International Institute of Education* left in 2023",
      icon: caricon,
    },
    {
      title: "Degree",
      description:
        "Studying as Electrical & Electronics Student in *Government Engineering Collage Kannur*",
      icon: travelicon,
    },
  ],
};

export const contactData = {
  title: {
    en: "Contact",
  },
  description: {
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
      
        en: "Your Name",
      },
      type: "text",
      validation: {
     
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
      
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
      
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
     
        en: "Your Subject",
      },
      type: "text",
      validation: {
      
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
   
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
     
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
   
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
   
      en: "I agree that Alpay may use my personal data (name and e-mail address) to contact me.",
    },
    description: {
   
      en: "By submitting this request, you acknowledge that you have read the Private Policy",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
  
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
  
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
 
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
   
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
