import Image from "next/image";

/**
 * The Experience Card component props.
 */
type ExperienceCardProps = {
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
  content?: string;
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
  content = "",
}: ExperienceCardProps) => {
  return (
    <div className="rounded-xl w-full h-fit bg-black/20 dark:bg-jps-cream/20 flex flex-col md:flex-row">
      <div
        className={`flex flex-col justify-start h-full text-center w-full md:w-96 bg-black text-white rounded-t-xl md:rounded-l-xl md:rounded-r-none ${sideBarClass}`}
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
            className={"rounded-full border-4 border-white -mt-20 mb-1"}
          />
        </div>
        <div className="flex flex-col justify-center h-fit w-full text-center">
          <span className="text-2xl font-extrabold">{name}</span>
          <span className="text-sm font-semibold">{dateRange}</span>
          <span className="text-sm font-semibold">{location}</span>
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
      <div className="flex flex-col justify-center h-fit w-full text-center p-2">
        {content}
      </div>
    </div>
  );
};
