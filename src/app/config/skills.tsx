import { JSX } from "react";
import { ToolBadge } from "../components/tool-badge";
import { GiTeamIdea } from "react-icons/gi";

/**
 * The skills to display.
 */
export const skills: JSX.Element = (
  <>
    <ToolBadge
      title="Teamwork"
      link=""
      icon={<GiTeamIdea className="h-8 w-8 text-white" />}
      badgeClass="bg-emerald-500"
    />
  </>
);
