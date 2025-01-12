import { ExperienceCardProps } from "@/app/components/experience-card";
import { EducationCardProps } from "../components/education-card";

/**
 * The JPS App Info configuration type.
 */
export type JPSInfo = {
  firstName: string;
  lastName: string;
  subtitles: string[];
  intro: string;
};

/**
 * The JPS App Info configuration object.
 */
export const appInfo: JPSInfo = {
  firstName: "Paul",
  lastName: "Sullivan",
  subtitles: ["SENIOR SOFTWARE ENGINEER", "FULL-STACK", "UI/UX"],
  intro:
    "I’m a full-stack software engineer passionate about crafting clean, consistent, and user-friendly interfaces. I thrive on transforming " +
    "creative ideas into fully realized products that both fulfill and build upon their original vision. I take pride in delivering satisfying user " +
    "experiences by practicing consistency, attention to detail, and creativity across both design and implementation. Whether it’s the " +
    "underlying code or the smallest user-facing detail, I strive to ensure every aspect contributes to an engaging and satisfying experience!",
};

/**
 * The Camgian Experience properties.
 */
export const camgianExperience: ExperienceCardProps = {
  name: "Camgian",
  dateRange: "2021 - Present",
  location: "Starkville, MS",
  headerImage: "/headers/camgian.png",
  headerAlt: "Camgian Headquarters",
  logoImage: "/camgian.png",
  logoAlt: "Camgian Logo",
  link: "https://camgian.com",
  linkTitle: "camgian.com",
  sideBarClass: "bg-camgian-green text-white",
  sections: [
    {
      title: "Senior Software Engineer",
      dateRange: "10/2022 - Present",
      content: "",
      contentPath: "camgian-senior.md",
    },
    {
      title: "Software Engineer",
      dateRange: "01/2021 - 09/2022",
      content: "",
      contentPath: "camgian-junior.md",
    },
  ],
};

/**
 * The Adtran Experience properties.
 */
export const adtranExperience: ExperienceCardProps = {
  name: "Adtran",
  dateRange: "2019",
  location: "Huntsville, AL",
  headerImage: "/headers/adtran.png",
  headerAlt: "Adtran Headquarters",
  logoImage: "/adtran.png",
  logoAlt: "Adtran Logo",
  link: "https://adtran.com",
  linkTitle: "adtran.com",
  sideBarClass:
    "bg-gradient-to-bl from-adtran-blue from-40% via-60% via-adtran-purple to-adtran-pink text-white",
  sections: [
    {
      title: "Software Engineering Co-Op",
      dateRange: "08/2019 - 12/2019",
      content: "",
      contentPath: "adtran.md",
    },
  ],
};

/**
 * The Mississippi State Education Properties.
 */
export const msstateEducation: EducationCardProps = {
  name: "Mississippi State University",
  dateRange: "2016 - 2020",
  location: "Starkville, MS",
  headerImage: "/headers/msstate.jpeg",
  headerAlt: "Mississippi State University Campus",
  logoImage: "/msstate.png",
  logoAlt: "Mississippi State University Logo",
  link: "https://cse.msstate.edu",
  linkTitle: "cse.msstate.com",
  sideBarClass: "bg-msstate-maroon text-white",
  notes: [
    "B.S. in Software Engineering",
    "Minor in Philosophy",
    "Summa Cum Laude - GPA 3.90/4.00",
  ],
};

/**
 * The Taylorsville Education properties.
 */
export const taylorsvilleEducation: EducationCardProps = {
  name: "Taylorsville High School",
  dateRange: "2012 - 2016",
  location: "Taylorsville, MS",
  headerImage: "/headers/taylorsville.jpeg",
  headerAlt: "Taylorsville High School",
  logoImage: "/taylorsville.png",
  logoAlt: "Taylorsville High School Logo",
  link: "https://sites.google.com/smithcountyschools.net/tac/home",
  linkTitle: "smithcountyschools.net/tac",
  sideBarClass: "bg-taylorsville-gold !text-taylorsville-green",
  notes: [
    "2016 National Merit Finalist",
    "2016 THS STAR Student",
    "THS Class of 2016 Salutatorian",
  ],
};
