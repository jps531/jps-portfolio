import { JSX } from "react";
import { SkillBadge } from "../components/skill-badge";
import { GiTeacher, GiTeamIdea } from "react-icons/gi";
import {
  RiEmpathizeFill,
  RiPresentationFill,
  RiSpeakAiFill,
} from "react-icons/ri";
import { HiLightBulb } from "react-icons/hi";
import { PiConfettiBold, PiMicrosoftTeamsLogoFill } from "react-icons/pi";
import { FaComments, FaNetworkWired } from "react-icons/fa";
import { MdChecklistRtl, MdDesignServices } from "react-icons/md";
import { IoDocumentText, IoRibbon } from "react-icons/io5";

/**
 * The soft skills to display.
 */
export const softSkills: JSX.Element = (
  <>
    <SkillBadge
      title="Teamwork"
      description=""
      icon={<GiTeamIdea className="h-12 w-12 text-white" />}
      badgeClass="bg-gradient-to-tr from-emerald-500 to-green-400"
    />
    <SkillBadge
      title="Mentorship"
      description=""
      icon={<GiTeacher className="h-12 w-12 text-white" />}
      badgeClass="bg-gradient-to-tr from-blue-500 to-sky-400"
    />
    <SkillBadge
      title="Empathy"
      description=""
      icon={<RiEmpathizeFill className="h-12 w-12 text-white" />}
      badgeClass="bg-gradient-to-tr from-rose-500 to-pink-400"
    />
    <SkillBadge
      title="Creativity"
      description=""
      icon={<HiLightBulb className="h-12 w-12 text-white" />}
      badgeClass="bg-gradient-to-tr from-amber-500 to-yellow-400 text-white"
    />
    <SkillBadge
      title="Meeting Facilitation"
      description=""
      icon={<PiMicrosoftTeamsLogoFill className="h-12 w-12 text-white" />}
      badgeClass="bg-gradient-to-tr from-purple-500 to-violet-400"
    />
    <SkillBadge
      title="Cross-Team Collaboration"
      description=""
      icon={<FaNetworkWired className="h-12 w-12 text-white" />}
      badgeClass="bg-gradient-to-tr from-red-500 to-orange-400"
    />
    <SkillBadge
      title="Customer Interaction"
      description=""
      icon={<RiSpeakAiFill className="h-12 w-12 text-white" />}
      badgeClass="bg-gradient-to-tr from-teal-500 to-emerald-400"
    />
    <SkillBadge
      title="Success Driven"
      description=""
      icon={<PiConfettiBold className="h-12 w-12 text-white" />}
      badgeClass="bg-gradient-to-tr from-violet-500 to-blue-400"
    />
    <SkillBadge
      title="Organized"
      description=""
      icon={<MdChecklistRtl className="h-12 w-12 text-white" />}
      badgeClass="bg-gradient-to-tr from-orange-500 to-amber-400"
    />
    <SkillBadge
      title="Quality Code"
      description=""
      icon={<IoRibbon className="h-12 w-12 text-white" />}
      badgeClass="bg-gradient-to-tr from-lime-500 to-emerald-400"
    />
    <SkillBadge
      title="Strong Documentation"
      description=""
      icon={<IoDocumentText className="h-12 w-12 text-white" />}
      badgeClass="bg-gradient-to-tr from-indigo-500 to-blue-400"
    />
    <SkillBadge
      title="Clear Communication"
      description=""
      icon={<FaComments className="h-12 w-12 text-white" />}
      badgeClass="bg-gradient-to-tr from-purple-500 to-rose-400"
    />
    <SkillBadge
      title="Effective Presentations"
      description=""
      icon={<RiPresentationFill className="h-12 w-12 text-white" />}
      badgeClass="bg-gradient-to-tr from-blue-700 to-sky-400"
    />
    <SkillBadge
      title="Clear, Consistent Designs"
      description=""
      icon={<MdDesignServices className="h-12 w-12 text-white" />}
      badgeClass="bg-gradient-to-tr from-rose-600 to-red-400"
    />
  </>
);
