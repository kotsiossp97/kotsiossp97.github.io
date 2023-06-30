import { Home, Work, WorkHistory, Contacts  } from "@mui/icons-material"
import HomePage from "../pages/HomePage"
import ProjectsPage from "../pages/ProjectsPage"
import ExperiencePage from "../pages/ExperiencePage"
import ContactMePage from "../pages/ContactMePage"

const Links = [
    {
        name: "Home",
        href: "#",
        icon: <Home />,
        pageComponent: <HomePage />,
        underDev: false
    },
    {
        name: "Projects",
        href: "#projects",
        icon: <Work />,
        pageComponent: <ProjectsPage />,
        underDev: false
    },
    {
        name: "Experience",
        href: "#experience",
        icon: <WorkHistory />,
        pageComponent: <ExperiencePage />,
        underDev: true
    },
    {
        name: "Contact Me",
        href: "#contactme",
        icon: <Contacts />,
        pageComponent: <ContactMePage />,
        underDev: true
    }
]

export default Links