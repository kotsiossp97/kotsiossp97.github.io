import Btech from "@/assets/schoolLogos/btech.png";
import Cisco from "@/assets/schoolLogos/cisco.png";
import Ecdl from "@/assets/schoolLogos/ecdl.png";
import Igcse from "@/assets/schoolLogos/igcse.png";
import Ucy from "@/assets/schoolLogos/ucy.png";

const Education = [
  {
    institution: "University of Cyprus",
    degree: "Bachelor of Science in Electrical Engineering",
    startYear: 2017,
    endYear: 2021,
    grade: 7.77,
    gradeBase: 10,
    logo: Ucy,
  },
  {
    institution: "B Technical School Limassol",
    degree: "High School Diploma - Electrical Installations/Installer",
    startYear: 2012,
    endYear: 2015,
    grade: 19.36,
    gradeBase: 20,
    logo: Btech,
  },
];

const Certificates = [
  {
    name: "ECDL Certificate",
    issuingOrganization: "Cyprus Computer Society",
    issueYear: 2012,
    logo: Ecdl,
  },
  {
    name: "CCNA Discovery: Networking for Home and Small Businesses",
    issuingOrganization: "Cisco",
    issueYear: 2014,
    logo: Cisco,
  },
  {
    name: "CCNA Discovery: Working at a Small-to-Medium Buisiness or ISP",
    issuingOrganization: "Cisco",
    issueYear: 2015,
    logo: Cisco,
  },
  {
    name: "IGCSE English as a Second Language",
    issuingOrganization: "British Council",
    issueYear: 2014,
    detail: "Grade A* and 2 (Two) in ORAL",
    logo: Igcse,
  },
];

export type IEducation = (typeof Education)[number];
export type ICertificate = (typeof Certificates)[number];

export { Certificates, Education };
