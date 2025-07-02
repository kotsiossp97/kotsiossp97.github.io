const MyExperience = [
  {
    title: "Senior Fullstack Developer",
    company: "SVMEnergy NET",
    from: "October 2024",
    to: "Today",
    location: "Limassol, Cyprus",
    description:
      "Fullstack development using JavaScript, TypeScript, PHP, Python, and various frameworks. My role involves developing and maintaining web and console applications. Additionally, I am leading a team of developers, ensuring code quality, and implementing best practices in software development.",
    type: "Full-time",
    image: "svm.jpg",
  },
  {
    title: "Frontend Developer",
    company: "Bernhard Schulte Shipmanagement (BSM)",
    from: "October 2023",
    to: "October 2024",
    location: "Limassol, Cyprus",
    description:
      "Front-End development using React, TypeScript, and SharePoint. My work involves creating user-friendly interfaces and applications within SharePoint, collaborating with teams to ensure integration and responsiveness.",
    type: "Full-time",
    image: "bsm.jpeg",
  },
  {
    title: "Software Engineer",
    company: "Amdocs",
    from: "November 2021",
    to: "October 2023",
    location: "Limassol, Cyprus",
    description: `Backend developer in one of the company's products. Developing new features, maintaining 
        code and testing code changes. Active scrum member always seeking to help others in the 
        team. My scrum obtained a number of high performing and high excellence awards.`,
    type: "Full-time",
    image: "amdocs.jpeg",
  },
  {
    title: "Special Scientist",
    company: "PV Technology Lab, University of Cyprus",
    from: "May 2021",
    to: "November 2021",
    location: "Limassol, Cyprus",
    description: `Web and software developer for integrating various new technologies in photovoltaic 
        systems. Developed web applications and programmed microcontrollers during working on 
        this role.`,
    type: "Full-time",
    image: "ucy.jpeg",
  },
  {
    title: "Shift Lead",
    company: "Costa Coffee Cyprus",
    from: "October 2015",
    to: "July 2018",
    location: "Limassol, Cyprus",
    description: `Preparing coffee-based beverages. Managing the shop and a team of baristas during shifts, as 
        well as providing customer service.`,
    type: "Part-time",
    image: "costa.jpeg",
  },
];

export type IExperience = (typeof MyExperience)[number];

export default MyExperience;
