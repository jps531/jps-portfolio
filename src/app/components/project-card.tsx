import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import rehypeExternalLinks from "rehype-external-links";

/**
 * The Project Card component props.
 */
export type ProjectCardProps = {
  name: string;
  dateRange?: string;
  headerImage: string;
  headerAlt: string;
  logoImage: string;
  logoAlt: string;
  link?: string;
  linkTitle?: string;
  sideBarClass?: string;
  iconClass?: string;
  content: string;
  contentPath?: string;
};

/**
 * The Project Card component.
 */
export const ProjectCard = ({
  name,
  dateRange,
  headerImage,
  headerAlt,
  logoImage,
  logoAlt,
  link,
  linkTitle,
  sideBarClass = "",
  iconClass = "",
  content = "",
  contentPath = "",
}: ProjectCardProps) => {
  /** HOOKS */

  /**
   * The content to display.
   */
  const [contentToDisplay, setContentToDisplay] = useState<string>(content);

  /**
   * Updates the section content when the page loads.
   */
  useEffect(() => {
    fetch(contentPath || "")
      .then((response) => response.text())
      .then((text) => setContentToDisplay(text))
      .catch((error) => console.error("Error fetching Markdown:", error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            className={cn(
              "rounded-full border-4 border-white bg-white -mt-20 mb-1",
              iconClass
            )}
          />
        </div>
        <div className="flex flex-col justify-center h-fit w-full text-center">
          <span className="text-2xl font-extrabold px-10">{name}</span>
          {dateRange && (
            <span className="text-sm font-s flex flex-row gap-1 text-center items-center justify-center w-full">
              <FaCalendarAlt className="h-3 w-3" />
              {dateRange}
            </span>
          )}
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
        <div className="prose dark:prose-dark text-left prose-a:text-black dark:prose-a:text-jps-cream prose-li:font-medium prose-li:text-sm prose-li:text-black dark:prose-li:text-jps-cream prose-pre:text-black w-full !max-w-full">
          <ReactMarkdown
            rehypePlugins={[[rehypeExternalLinks, { target: "_blank" }]]}
          >
            {contentToDisplay}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};
