import ContactMePage from "@/pages/ContactMePage";
import StudiesPage from "@/pages/EducationPage";
import ExperiencePage from "@/pages/ExperiencePage";
import HomePage from "@/pages/HomePage";
import ProjectsPage from "@/pages/ProjectsPage";
import { Contacts, Home, School, Work, WorkHistory } from "@mui/icons-material";

const Links = [
  {
    name: "Home",
    href: "#",
    icon: <Home />,
    pageComponent: <HomePage />,
    underDev: false,
  },
  {
    name: "Projects",
    href: "#projects",
    icon: <Work />,
    pageComponent: <ProjectsPage />,
    underDev: false,
  },
  {
    name: "Experience",
    href: "#experience",
    icon: <WorkHistory />,
    pageComponent: <ExperiencePage />,
    underDev: false,
  },
  {
    name: "Education",
    href: "#education",
    icon: <School />,
    pageComponent: <StudiesPage />,
    underDev: false,
  },
  {
    name: "Contact Me",
    href: "#contactme",
    icon: <Contacts />,
    pageComponent: <ContactMePage />,
    underDev: false,
  },
];

export default Links;
