"use client";

import { appInfo } from "./config/app-text";
import { DoubleStripe } from "./components/double-stripe";
import { ProfilePicture } from "./components/profile-picture";
import { DarkModeSelector } from "./components/dark-mode-toggle";
import { JSX, useState } from "react";
import { ExperienceCard } from "./components/experience-card";

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
      <span className="text-black dark:text-jps-cream font-semibold italic text-base text-left p-10 animate-jump-in animate-once z-0">
        {appInfo.intro}
      </span>
    </div>
  );

  /**
   * The Experience Section.
   */
  const experienceSection: JSX.Element = (
    <div
      className="w-full h-fit flex flex-col text-center font-bold uppercase text-jps-green dark:text-jps-cream p-4 gap-8"
      id="experience"
    >
      <div className="flex flex-col items-center justify-center text-2xl font-extrabold -mb-4">
        EXPERIENCE
      </div>
      <ExperienceCard
        name="Camgian"
        dateRange="2021 - Present"
        location="Starkville, MS"
        headerImage="/headers/camgian.png"
        headerAlt="Camgian Headquarters"
        logoImage="/camgian.png"
        logoAlt="Camgian Logo"
        link="https://camgian.com"
        linkTitle="camgian.com"
        sideBarClass="bg-camgian-green text-white"
      />
      <ExperienceCard
        name="Adtran"
        dateRange="2019"
        location="Huntsville, AL"
        headerImage="/headers/adtran.png"
        headerAlt="Adtran Headquarters"
        logoImage="/adtran.png"
        logoAlt="Adtran Logo"
        link="https://adtran.com"
        linkTitle="adtran.com"
        sideBarClass="bg-gradient-to-bl from-adtran-blue from-40% via-60% via-adtran-purple to-adtran-pink text-white"
      />
    </div>
  );

  /**
   * The Education Section.
   */
  const educationSection: JSX.Element = (
    <div
      className="w-full h-fit flex flex-col text-center font-bold uppercase text-jps-green dark:text-jps-cream p-4 gap-8"
      id="education"
    >
      <div className="flex flex-col items-center justify-center text-2xl font-extrabold -mb-4">
        EDUCATION
      </div>
      <ExperienceCard
        name="Mississippi State University"
        dateRange="2016 - 2020"
        location="Starkville, MS"
        headerImage="/headers/msstate.jpeg"
        headerAlt="Mississippi State University Campus"
        logoImage="/msstate.png"
        logoAlt="Mississippi State University Logo"
        link="https://cse.msstate.edu"
        linkTitle="cse.msstate.com"
        sideBarClass="bg-msstate-maroon text-white"
      />
      <ExperienceCard
        name="Taylorsville High School"
        dateRange="2012 - 2016"
        location="Taylorsville, MS"
        headerImage="/headers/taylorsville.jpeg"
        headerAlt="Taylorsville High School"
        logoImage="/taylorsville.png"
        logoAlt="Taylorsville High School Logo"
        link="https://sites.google.com/smithcountyschools.net/tac/home"
        linkTitle="smithcountyschools.net/tac"
        sideBarClass="bg-taylorsville-gold text-taylorsville-green"
      />
    </div>
  );

  /**
   * The App Sections.
   */
  const appSections: JSX.Element = (
    <div className="w-full h-full flex flex-col text-center gap-4">
      {experienceSection}
      {educationSection}
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
