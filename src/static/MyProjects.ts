import PythonImg from "@/assets/python.png";
import LPMCD from "@/assets/lmcd.jpg";
import FS22Dir from "@/assets/fs22DirChanger.png";
import CafeScreen from "@/assets/cafeScreenshot.png";
import Carwash from "@/assets/carwash.png";

export const MyProjects = [
  {
    title: "Low Processing Monitoring and Control Device",
    description:
      "During the senior year of my studies, I implemented a monitoring and control web application, for photovoltaic (PV) systems.",
    link: "",
    date: "May 20, 2021",
    image: LPMCD,
  },
  {
    title: "FS22 Mod Directory Changer",
    description:
      "A small app developed using React and Electron. It's purpose is to handle the directory of the mods for the game Farming Simulator 22.",
    link: "https://github.com/kotsiossp97/fs22-mod-directory-changer",
    date: "April 22, 2023",
    image: FS22Dir,
  },
  {
    title: "pyFolderOrganizer",
    description:
      "Python package to organize a folder in sub-directories based on file types. It's currently published as a package in PyPI",
    link: "https://github.com/kotsiossp97/pyFolderOrganizer",
    date: "May 28, 2023",
    image: PythonImg,
  },
  {
    title: "Portfolio Webpage",
    description:
      "As part of my React learning path, I've decided to build my portfolio website using ReactJS framework. It is the current page you are viewing😋.",
    link: "https://github.com/kotsiossp97/kotsiossp97.github.io",
    date: "July 03, 2023",
  },
  {
    title: "Cafe Agios Konstantinos Web App",
    description:
      "A small React SPA application for a local cafe called Agios Konstantinos. The application is providing the menu and details of the cafe.",
    link: "https://cafe-agioskonstantinos.web.app",
    date: "November 10, 2023",
    image: CafeScreen,
  },
  {
    title: "SimRacing FOV Calculator",
    description:
      "A simple React Application for calculating the correct FOV setting for various sim racing games.",
    link: "https://github.com/kotsiossp97/simracing-fov-calculator/",
    date: "March 15, 2024",
    image:
      "https://raw.githubusercontent.com/kotsiossp97/simracing-fov-calculator/main/screenshots/screen1.png",
  },
  {
    title: "The Carwash Web App",
    description:
      "A complete web application for a carwash business, built with ReactJS and TypeScript. It includes features like online booking, service management, and scheduling.",
    link: "https://carwash.cy",
    date: "December 21, 2024",
    image: Carwash,
  },
];

export type IProject = (typeof MyProjects)[number];

// "https://raw.githubusercontent.com/kotsiossp97/fs22-mod-directory-changer/master/screenshots/screen1.png"
