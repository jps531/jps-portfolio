import { cn } from "@/lib/utils";
import { JSX } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

/**
 * The Skill Badge component props.
 */
export type SkillBadgeProps = {
  title: string;
  description?: string;
  icon?: JSX.Element;
  badgeClass?: string;
};

/**
 * The Skill Badge component.
 */
export const SkillBadge = ({
  title,
  description,
  icon,
  badgeClass,
}: SkillBadgeProps): JSX.Element => {
  /** RETURN */

  return (
    <Popover>
      <PopoverTrigger>
        <div
          className={cn(
            "bg-black cursor-pointer text-white min-w-72 flex flex-col gap-2 w-fit p-4 rounded-xl hover:scale-[101%] transition duration-200 ease-in-out hover:brightness-110",
            badgeClass
          )}
        >
          <div className="flex flex-col text-center items-center justify-center align-middle">
            {icon}
          </div>
          <span className="font-bold text-lg flex flex-col text-center items-center justify-center align-middle">
            {title}
          </span>
        </div>
      </PopoverTrigger>
      <PopoverContent className={cn("font-montserrat font-semibold text-sm ")}>
        {description}
      </PopoverContent>
    </Popover>
  );
};
