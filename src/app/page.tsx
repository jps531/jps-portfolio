"use client";

import {
  adtranExperience,
  appInfo,
  camgianExperience,
  hailStateUnisDatabaseProject,
  msstateEducation,
  portfolioWebsiteProject,
  taylorsvilleEducation,
} from "./config/app-text";
import { DoubleStripe } from "./components/double-stripe";
import { ProfilePicture } from "./components/profile-picture";
import { DarkModeSelector } from "./components/dark-mode-toggle";
import { JSX, useState } from "react";
import { ExperienceCard } from "./components/experience-card";
import { EducationCard } from "./components/education-card";
import { Section } from "./components/section";
import { ProjectCard } from "./components/project-card";
import { FaBriefcase, FaGraduationCap, FaHeart, FaLink } from "react-icons/fa";
import { FiBox } from "react-icons/fi";
import { BiCodeAlt } from "react-icons/bi";
import { GiSkills } from "react-icons/gi";
import { TbPhotoFilled } from "react-icons/tb";
import { tools } from "./config/tools";
import { softSkills } from "./config/skills";
import { PiStarFill } from "react-icons/pi";

/**
 * The App Home page.
 */
export default function Home() {
  /** HOOKS */

  /**
   * The height of the header.
   */
  const [headerHeight, setHeaderHeight] = useState<number>(288);

  /**
   * Whether the header is collapsed.
   */
  const [headerCollapsed, setHeaderCollapsed] = useState<boolean>(false);

  /** FUNCTIONS */

  /**
   * Sets a watch on the page scroll event.
   */
  window.onscroll = function () {
    handleScroll();
  };

  /**
   * Handles a scroll event.
   */
  const handleScroll = () => {
    if (!headerCollapsed && document.documentElement.scrollTop > 110) {
      setHeaderHeight(144);
      setHeaderCollapsed(true);
    } else if (headerCollapsed && document.documentElement.scrollTop < 5) {
      setHeaderHeight(288);
      setHeaderCollapsed(false);
    }
  };

  /** COMPONENTS */

  /**
   * The App Title.
   */
  const appTitle: JSX.Element = (
    <div className="w-fit p-4 h-fit z-20 flex flex-col items-center justify-center bg-jps-cream dark:bg-black">
      <div className="flex flex-col md:flex-row items-center justify-center md:gap-4">
        <span className="text-jps-green dark:text-jps-cream font-extrabold text-4xl md:text-6xl uppercase">
          {appInfo.firstName}
        </span>
        <span className="text-jps-green dark:text-jps-cream font-extrabold -mt-2 md:mt-0 text-xl md:text-6xl uppercase">
          {appInfo.lastName}
        </span>
      </div>
      <span className="text-jps-blue font-extrabold text-[10px] md:text-lg uppercase hidden md:block">
        {appInfo.subtitles.join(" | ")}
      </span>
    </div>
  );

  /**
   * The App Header.
   */
  const appHeader: JSX.Element = (
    <div
      style={{
        height: `${headerHeight}px`,
        transition: "0.4s",
        boxShadow: headerCollapsed
          ? "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
          : "",
      }}
      className="sticky top-0 z-10 bg-jps-cream dark:bg-black pt-4 gap-6 md:gap-8 w-full flex flex-row md:flex-row items-center text-center justify-center max-h-72 transition ease-in-out delay-50"
    >
      <ProfilePicture
        size={headerHeight * 0.75}
        className={headerCollapsed ? "border-[6px]" : "border-8"}
      />
      {appTitle}
      <DoubleStripe />
      <div className="absolute top-4 right-4">
        <DarkModeSelector />
      </div>
    </div>
  );

  /**
   * The App Intro.
   */
  const appIntro: JSX.Element = (
    <div className="w-full h-fit flex flex-col text-center" id="intro">
      <span className="text-black dark:text-jps-cream font-semibold italic text-base text-left px-10 py-0 md:p-10 z-0">
        {appInfo.intro}
      </span>
    </div>
  );

  /**
   * The Experience Section.
   */
  const experienceSection: JSX.Element = (
    <Section title="Experience" icon={<FaBriefcase className="h-5 w-5" />}>
      <ExperienceCard {...camgianExperience} />
      <ExperienceCard {...adtranExperience} />
    </Section>
  );

  /**
   * The Education Section.
   */
  const educationSection: JSX.Element = (
    <Section title="Education" icon={<FaGraduationCap className="h-7 w-7" />}>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <EducationCard {...msstateEducation} />
        <EducationCard {...taylorsvilleEducation} />
      </div>
    </Section>
  );

  /**
   * The Personal Projects Section.
   */
  const personalProjectsSection: JSX.Element = (
    <Section
      title="Personal Projects"
      titleClass="min-w-72"
      icon={<FiBox className="h-6 w-6" />}
    >
      <ProjectCard {...hailStateUnisDatabaseProject} />
      <ProjectCard {...portfolioWebsiteProject} />
    </Section>
  );

  /**
   * The Tools and Technologies Section.
   */
  const toolsTechnologiesSection: JSX.Element = (
    <Section
      title="Tools and Technologies"
      icon={<BiCodeAlt className="h-7 w-7" />}
    >
      <div className="flex flex-row flex-wrap justify-center items-center gap-4">
        {tools}
      </div>
    </Section>
  );

  /**
   * The Soft Skills and Principles Section.
   */
  const softSkillsPrinciplesSection: JSX.Element = (
    <Section
      title="Soft Skills and Principles"
      titleClass="min-w-60"
      icon={<GiSkills className="h-5 w-5" />}
    >
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4">
        {softSkills}
      </div>
    </Section>
  );

  /**
   * The Passions Section.
   */
  const passionsSection: JSX.Element = (
    <Section title="Passions" icon={<FaHeart className="h-5 w-5" />}>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4"></div>
    </Section>
  );

  /**
   * The Design Portfolio Section.
   */
  const designPortfolioSection: JSX.Element = (
    <Section
      title="Design Portfolio"
      titleClass="min-w-72"
      icon={<TbPhotoFilled className="h-5 w-5" />}
    >
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <iframe
          src="https://www.behance.net/embed/project/215410207?ilo0=1"
          height="300"
          width="300"
          allowFullScreen
          allow="clipboard-write"
          referrerPolicy="strict-origin-when-cross-origin"
          className="bg-jps-cream dark:bg-black rounded-xl"
        ></iframe>
      </div>
    </Section>
  );

  /**
   * The Spotlight Section.
   */
  const spotlightSection: JSX.Element = (
    <Section title="Spotlight" icon={<PiStarFill className="h-5 w-5" />}>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4"></div>
    </Section>
  );

  /**
   * The Links Section.
   */
  const linksSection: JSX.Element = (
    <Section title="Links" icon={<FaLink className="h-5 w-5" />}>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4"></div>
    </Section>
  );

  /**
   * The App Sections.
   */
  const appSections: JSX.Element = (
    <div className="w-full h-full flex flex-col text-center gap-4">
      {experienceSection}
      {educationSection}
      {personalProjectsSection}
      {toolsTechnologiesSection}
      {softSkillsPrinciplesSection}
      {passionsSection}
      {designPortfolioSection}
      {spotlightSection}
      {linksSection}
    </div>
  );

  /**
   * The App Footer.
   */
  const appFooter: JSX.Element = (
    <div className="md:hidden sticky bottom-0 w-full p-4 h-fit z-20 flex flex-col items-center justify-center bg-jps-cream dark:bg-black">
      <span className="text-jps-blue font-extrabold text-xs uppercase">
        {appInfo.subtitles.join(" | ")}
      </span>
    </div>
  );

  /** RETURN */

  return (
    <div className="flex w-full font-montserrat bg-jps-cream dark:bg-black items-center justify-items-center min-h-screen">
      <main className="flex flex-col row-start-2 items-center w-full h-full">
        {appHeader}
        {appIntro}
        {appSections}
        {appFooter}
      </main>
    </div>
  );
}
