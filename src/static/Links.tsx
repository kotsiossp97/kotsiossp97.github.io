import ContactMePage from "@/pages/ContactMePage";
import ExperiencePage from "@/pages/ExperiencePage";
import HomePage from "@/pages/HomePage";
import ProjectsPage from "@/pages/ProjectsPage";
import { Home, Work, WorkHistory, Contacts } from "@mui/icons-material";

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
    name: "Contact Me",
    href: "#contactme",
    icon: <Contacts />,
    pageComponent: <ContactMePage />,
    underDev: false,
  },
];

export default Links;
