import { JSX } from "react";
import { FaBaseballBatBall, FaRibbon } from "react-icons/fa6";
import { BsMusicNote } from "react-icons/bs";
import { PassionCard } from "../components/passion-card";
import { MdDesignServices } from "react-icons/md";
import { RiMentalHealthFill } from "react-icons/ri";

/**
 * The passions to display.
 */
export const passions: JSX.Element = (
  <>
    <PassionCard
      title="Sports!"
      icon={<FaBaseballBatBall className="w-6 h-6" />}
      content=""
      contentPath="sports.md"
      sideBarClass="!bg-amber-500 !text-black"
    />
    <PassionCard
      title="Music & Concerts!"
      icon={<BsMusicNote className="w-6 h-6" />}
      content=""
      contentPath="music.md"
      sideBarClass="!bg-gradient-to-r !from-rose-500 !via-sky-500 !to-emerald-500 !text-white"
    />
    <PassionCard
      title="Technology & Design!"
      icon={<MdDesignServices className="w-6 h-6" />}
      content=""
      contentPath="technology.md"
      sideBarClass="!bg-gradient-to-r !from-rose-500 !to-orange-500 !text-white"
    />
    <PassionCard
      title="Disability Rights!"
      icon={<FaRibbon className="w-6 h-6" />}
      content=""
      contentPath="disability-rights.md"
      sideBarClass="!bg-gradient-to-r !from-sky-500 !via-emerald-500 !to-amber-500 !text-white"
    />
    <PassionCard
      title="Mental Health!"
      icon={<RiMentalHealthFill className="w-6 h-6" />}
      content=""
      contentPath="mental-health.md"
      sideBarClass="!bg-emerald-500 !text-white"
    />
  </>
);
