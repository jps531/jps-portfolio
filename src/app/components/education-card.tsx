import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

/**
 * The Education Section type.
 */
export type EducationSection = {
  title: string;
  dateRange: string;
  content: string;
  contentPath?: string;
};

/**
 * The Education Card component props.
 */
export type EducationCardProps = {
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
  notes?: string[];
};

/**
 * The Education Card component.
 */
export const EducationCard = ({
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
  notes = [],
}: EducationCardProps) => {
  /** RETURN */

  return (
    <div className="rounded-xl w-fit h-fit bg-black/10 dark:bg-jps-cream/10 flex flex-col hover:scale-[101%] transition duration-200 ease-in-out">
      <div
        className={`flex flex-col justify-start h-auto text-center w-full md:w-96 bg-black text-white rounded-t-xl ${sideBarClass}`}
      >
        <Image
          src={headerImage}
          alt={headerAlt}
          priority
          width={384}
          height={577.44}
          className={"rounded-t-xl md:rounded-tl-xl min-w-full md:min-w-auto"}
        />
        <div className="flex flex-col items-center justify-center">
          <Image
            src={logoImage}
            alt={logoAlt}
            priority
            width={100}
            height={100}
            className={"rounded-full border-4 border-white -mt-20 mb-1"}
          />
        </div>
        <div className="flex flex-col justify-center h-fit w-full text-center">
          <span className="text-2xl font-extrabold px-10">{name}</span>
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
      <div className="flex flex-col justify-center h-fit w-full p-2 px-4 normal-case text-sm font-semibold">
        {notes.map((n) => (
          <span key={n}>{n}</span>
        ))}
      </div>
    </div>
  );
};
