import { cn } from "@/lib/utils";
import { JSX, PropsWithChildren } from "react";

/**
 * The Section component props.
 */
export type SectionProps = {
  title: string;
  icon?: JSX.Element;
  sectionClass?: string;
  titleClass?: string;
};

/**
 * The Section component.
 */
export const Section = ({
  title,
  icon,
  sectionClass = "",
  titleClass = "",
  ...props
}: PropsWithChildren<SectionProps>) => (
  <div
    className={cn(
      "w-full h-fit flex flex-col text-center font-bold text-jps-green dark:text-jps-cream p-4 gap-8",
      sectionClass
    )}
    id={title.toLowerCase()}
  >
    <div className="flex flex-row items-center justify-center text-2xl uppercase font-extrabold -mb-4 gap-4">
      {icon && <div>{icon}</div>}
      <span className={cn("w-min md:w-fit md:min-w-min", titleClass)}>
        {title}
      </span>
    </div>
    {props.children}
  </div>
);
