import { JSX, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeExternalLinks from "rehype-external-links";
import Image from "next/image";

/**
 * The Passion Section type.
 */
export type PassionCardProps = {
  title: string;
  icon?: JSX.Element;
  headerImage?: string;
  headerAlt?: string;
  sideBarClass?: string;
  content: string;
  contentPath?: string;
};

/**
 * The Passion Card component.
 */
export const PassionCard = ({
  title,
  icon,
  headerImage,
  headerAlt,
  sideBarClass,
  content,
  contentPath,
}: PassionCardProps) => {
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
    <div className="rounded-xl min-w-full md:min-w-fit w-fit h-fit bg-black/10 dark:bg-jps-cream/10 flex flex-col hover:scale-[101%] transition duration-200 ease-in-out">
      <div
        className={`flex flex-col justify-start h-auto text-center w-full md:w-96 bg-black text-white rounded-t-xl uppercase ${sideBarClass}`}
      >
        {headerImage && headerAlt && (
          <Image
            src={headerImage}
            alt={headerAlt}
            priority
            width={384}
            height={577.44}
            className={"rounded-t-xl md:rounded-tl-xl min-w-full md:min-w-auto"}
          />
        )}
        <div className="flex flex-row justify-center h-fit w-full text-center gap-4 p-4">
          <div className="flex flex-col items-center justify-center text-center">
            {icon}
          </div>
          <span className="text-2xl font-extrabold normal-case">{title}</span>
        </div>
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
