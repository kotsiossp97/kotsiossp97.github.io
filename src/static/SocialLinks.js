import { Google, Instagram, LinkedIn, GitHub } from '@mui/icons-material'

const SocialLinks = [
    {
        name: "github",
        href: "https://www.github.com/kotsiossp97",
        icon: <GitHub fontSize='large' />,
        tooltip: "View GitHub Profile"
    },
    {
        name: "linkedin",
        href: "https://www.linkedin.com/in/konstantinos-andreou-0ba610183/",
        icon: <LinkedIn fontSize='large' />,
        tooltip: "Connect with me on LinkedIn",
    },
    {
        name: "instagram",
        href: "https://www.instagram.com/kotsios.andr/",
        icon: <Instagram fontSize='large' />,
        tooltip: "Follow me on Instagram",
    },
    {
        name: "gmail",
        href: "mailto:kotsiossp@gmail.com",
        icon: <Google fontSize='large' />,
        tooltip: "Send me an E-Mail",
    }
]

export default SocialLinks