import { cn } from "@/lib/utils";
import { JSX } from "react";

/**
 * The Tool Badge component props.
 */
export type ToolBadgeProps = {
  title: string;
  link: string;
  icon?: JSX.Element;
  badgeClass?: string;
};

/**
 * The Tool Badge component.
 */
export const ToolBadge = ({
  title,
  link,
  icon,
  badgeClass,
}: ToolBadgeProps): JSX.Element => {
  /** RETURN */

  return (
    <a
      target="_blank"
      href={link}
      rel="noopener noreferrer"
      className={cn(
        "bg-black text-white flex flex-row gap-2 w-fit p-2 rounded-xl hover:scale-[101%] transition duration-200 ease-in-out hover:brightness-110",
        badgeClass
      )}
    >
      {icon}
      <span className="font-bold text-lg flex flex-col text-center items-center justify-center align-middle">
        {title}
      </span>
    </a>
  );
};
