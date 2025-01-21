import Image from "next/image";
import { JSX, useEffect, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import ReactMarkdown from "react-markdown";
import rehypeExternalLinks from "rehype-external-links";

/**
 * The Experience Section type.
 */
export type ExperienceSection = {
  title: string;
  dateRange: string;
  content: string;
  contentPath?: string;
};

/**
 * The Experience Card component props.
 */
export type ExperienceCardProps = {
  name: string;
  dateRange: string;
  location: string;
  headerImage: string;
  headerAlt: string;
  logoImage: string;
  logoAlt: string;
  link?: string;
  linkTitle?: string;
  sideBarClass?: string;
  sections?: ExperienceSection[];
};

/**
 * The Experience Card component.
 */
export const ExperienceCard = ({
  name,
  dateRange,
  location,
  headerImage,
  headerAlt,
  logoImage,
  logoAlt,
  link,
  linkTitle,
  sideBarClass = "",
  sections = [],
}: ExperienceCardProps) => {
  /** HOOKS */

  /**
   * The experience sections to display.
   */
  const [sectionsToDisplay, setSectionsToDisplay] =
    useState<ExperienceSection[]>(sections);

  /**
   * Updates the section content when the page loads.
   */
  useEffect(() => {
    sections.map((s) => {
      fetch(s.contentPath || "")
        .then((response) => response.text())
        .then((text) => updateSectionContent(s.title, text))
        .catch((error) => console.error("Error fetching Markdown:", error));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** FUNCTIONS */

  /**
   * Updates the section content.
   *
   * @param title the title of the section
   * @param content the content to add to the section
   */
  const updateSectionContent = (title: string, content: string) => {
    const updatedSection = sectionsToDisplay.find((s) => s.title === title);

    if (updatedSection) {
      updatedSection.content = content;
      const newSections = [...sectionsToDisplay];
      const index = newSections.findIndex((s) => s.title === title);
      if (index !== -1) {
        newSections.splice(index, 1, updatedSection);
      }
      setSectionsToDisplay(newSections);
    }
  };

  /**
   * Displays the content for the experience.
   */
  const displayContent = (): JSX.Element => {
    const sectionItems: JSX.Element[] = [];

    sections.forEach((s, i) =>
      sectionItems.push(
        <div key={s.title}>
          <div className="text-black dark:text-jps-cream flex flex-col normal-case">
            <div className="flex flex-col md:flex-row">
              <div className="uppercase italic text-lg font-bold w-full text-center md:text-left">
                {s.title}
              </div>
              <span className="text-sm font-s flex flex-row gap-1 text-center md:text-right items-center justify-center md:justify-end w-full md:w-fit min-w-48 uppercase">
                <FaCalendarAlt className="h-3 w-3 text-jps-green dark:text-jps-cream" />
                <span className="text-jps-blue">{s.dateRange}</span>
              </span>
            </div>
            <div className="prose dark:prose-dark text-left prose-a:text-black dark:prose-a:text-jps-cream prose-li:font-medium prose-li:text-sm prose-li:text-black dark:prose-li:text-jps-cream prose-pre:text-black w-full !max-w-full">
              <ReactMarkdown
                rehypePlugins={[[rehypeExternalLinks, { target: "_blank" }]]}
              >
                {s.content}
              </ReactMarkdown>
            </div>
          </div>
          {i !== sections.length - 1 && (
            <hr className="my-4 h-0.5 bg-black border-black dark:border-jps-cream dark:bg-jps-cream" />
          )}
        </div>
      )
    );

    return <>{sectionItems}</>;
  };

  /** RETURN */

  return (
    <div className="rounded-xl w-full h-fit bg-black/10 dark:bg-jps-cream/10 flex flex-col md:flex-row hover:scale-[101%] transition duration-200 ease-in-out">
      <div
        className={`flex flex-col justify-start h-auto text-center w-full md:w-96 bg-black text-white rounded-t-xl md:rounded-l-xl md:rounded-r-none uppercase ${sideBarClass}`}
      >
        <Image
          src={headerImage}
          alt={headerAlt}
          priority
          width={384}
          height={577.44}
          className={
            "rounded-t-xl md:rounded-tl-xl md:rounded-r-none min-w-full"
          }
        />
        <div className="flex flex-col items-center justify-center">
          <Image
            src={logoImage}
            alt={logoAlt}
            priority
            width={100}
            height={100}
            className={
              "rounded-full border-4 border-white bg-white -mt-20 mb-1"
            }
          />
        </div>
        <div className="flex flex-col justify-center h-fit w-full text-center">
          <span className="text-2xl font-extrabold">{name}</span>
          <span className="text-sm font-s flex flex-row gap-1 text-center items-center justify-center w-full">
            <FaCalendarAlt className="h-3 w-3" />
            {dateRange}
          </span>
          <span className="text-sm font-s flex flex-row gap-1 text-center items-center justify-center w-full">
            <FaLocationDot className="h-3 w-3" />
            {location}
          </span>
        </div>
        {link && (
          <a
            target="_blank"
            href={link}
            rel="noopener noreferrer"
            className="text-xs font-semibold underline p-2"
          >
            {linkTitle || link}
          </a>
        )}
      </div>
      <div className="flex flex-col justify-center h-fit w-full p-2 px-4">
        {displayContent()}
      </div>
    </div>
  );
};
