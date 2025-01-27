import { JSX } from "react";
import { SkillBadge } from "../components/skill-badge";
import { GiPlantRoots, GiTeacher, GiTeamIdea } from "react-icons/gi";
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
      description="In my experience, teamwork is critical to success as a software engineer! My greatest professional successes have come from working with my teammates to allow each of our strengths to guide us to a successful outcome."
      icon={<GiTeamIdea className="h-12 w-12 text-white" />}
      badgeClass="bg-gradient-to-tr from-emerald-500 to-green-400"
    />
    <SkillBadge
      title="Mentorship"
      description="As I've grown in my career, one of the things that I've found to be most rewarding is the opportunity to mentor younger engineers. Helping others to grow and navigate the same path I've had to navigate is not only rewarding, but also helps me grow and gain new perspectives."
      icon={<GiTeacher className="h-12 w-12 text-white" />}
      badgeClass="bg-gradient-to-tr from-blue-500 to-sky-400"
    />
    <SkillBadge
      title="Empathy"
      description="I consider empathy to be one of my core personal values, and I believe that it translates to success professionally as well. Empathy allows me to better understand and connect with my teammates, allowing for more effective communication and collaboration. It also allows me to better understand the needs of customers, designing user interfaces that best meet those needs."
      icon={<RiEmpathizeFill className="h-12 w-12 text-white" />}
      badgeClass="bg-gradient-to-tr from-rose-500 to-pink-400"
    />
    <SkillBadge
      title="Creativity"
      description="Creating software - especially user interfaces - is an inherently creative process. I love designing interfaces that are not only functional, but also intuitive and aesthetically pleasing."
      icon={<HiLightBulb className="h-12 w-12 text-white" />}
      badgeClass="bg-gradient-to-tr from-amber-500 to-yellow-400 text-white"
    />
    <SkillBadge
      title="Meeting Facilitation"
      description="No one likes meetings - but sometimes they are necessary to stay in sync with teammates! I have considerable experience leading meetings, making sure they stay on topic, ensuring that everyone has a chance to be heard, and keeping them moving without running over time."
      icon={<PiMicrosoftTeamsLogoFill className="h-12 w-12 text-white" />}
      badgeClass="bg-gradient-to-tr from-purple-500 to-violet-400"
    />
    <SkillBadge
      title="Cross-Team Collaboration"
      description="A successful software engineering project extends far beyond just the development team. In my professional experience, I've worked closely with management, product managers, IT, DevOps, QA, and other teams to ensure that the software we deliver is high quality and meets the needs of the business as well as those of our customers."
      icon={<FaNetworkWired className="h-12 w-12 text-white" />}
      badgeClass="bg-gradient-to-tr from-red-500 to-orange-400"
    />
    <SkillBadge
      title="Customer Interaction"
      description="One of the most important parts of the job of a software engineer is understanding the needs of the customer. I have ample experience working both directly with customers and with product managers who serve as intermediates. In either case, I strive to be professional, understanding, and curious as to how we can best meet the customer's needs."
      icon={<RiSpeakAiFill className="h-12 w-12 text-white" />}
      badgeClass="bg-gradient-to-tr from-teal-500 to-emerald-400"
    />
    <SkillBadge
      title="Root Cause Analysis"
      description="Death, taxes, and bugs in software. Bugs are inevitable, and *when* they happen, it's important to be able to quickly and accurately identify the root cause and, if feasible, address the issue at that root level rather than apply a band-aid fix. I have considerable experience in debugging complex systems, working with teammates to identify which area of the system is causing the issue, and then taking the necessary steps to resolve that root cause."
      icon={<GiPlantRoots className="h-12 w-12 text-white" />}
      badgeClass="bg-gradient-to-tr from-orange-500 to-rose-400"
    />
    <SkillBadge
      title="Success Driven"
      description="One of the greatest feelings as a software engineer is seeing a completed project successfully delivered! When I'm developing a project, I'm driven by that vision of success, working tirelessly to make sure that the finished product is finished on time, meets my personal standard of quality, and meets the needs of the customer."
      icon={<PiConfettiBold className="h-12 w-12 text-white" />}
      badgeClass="bg-gradient-to-tr from-violet-500 to-blue-400"
    />
    <SkillBadge
      title="Organized"
      description="I strive to keep everything I do on a software project properly organized. This allows me to keep my priorities in order, focus on controlling what I can control, and makes it easier to communicate my status and plans to others."
      icon={<MdChecklistRtl className="h-12 w-12 text-white" />}
      badgeClass="bg-gradient-to-tr from-orange-500 to-amber-400"
    />
    <SkillBadge
      title="Quality Code"
      description="I believe quality code is essential to developing a quality software product! Reducing technical debt, minimizing confusion, and making sure that the code is maintainable and scalable are all vital to the success of a software project. I want anyone who reads my code to be able to understand it and build upon it as needed without difficulty."
      icon={<IoRibbon className="h-12 w-12 text-white" />}
      badgeClass="bg-gradient-to-tr from-lime-500 to-emerald-400"
    />
    <SkillBadge
      title="Strong Documentation"
      description="Strong documentation is absolutely essential to the success of a software project. I strive to make sure that my code, designs, plans, and ideas are all well documented. This allows me to communicate effectively, remain organized, and ensure that my work can be easily understood and built upon by others."
      icon={<IoDocumentText className="h-12 w-12 text-white" />}
      badgeClass="bg-gradient-to-tr from-indigo-500 to-blue-400"
    />
    <SkillBadge
      title="Clear Communication"
      description="Communication is absolutely vital to the success of a software project. I strive to make sure that my communication is clear, concise, effective, and accurate. I want to make sure that I stay in sync with my teammates by ensuring they understand my status, my plans, and my needs, and that I understand theirs as well."
      icon={<FaComments className="h-12 w-12 text-white" />}
      badgeClass="bg-gradient-to-tr from-purple-500 to-rose-400"
    />
    <SkillBadge
      title="Effective Presentations"
      description="Whether presenting ideas, designs, status updates, or a finished product, effective presentations are a major key to success as a software engineer. I have abundant experience in presenting my work to a wide array of audiences, including teammates, managers, other internal stakeholders, and external customers. In all cases, it's important to me that my presentations are clear, concise, engaging, and effective at conveying what I have to present."
      icon={<RiPresentationFill className="h-12 w-12 text-white" />}
      badgeClass="bg-gradient-to-tr from-blue-700 to-sky-400"
    />
    <SkillBadge
      title="Clear, Consistent Designs"
      description="As a UI designer, it's of utmost importance to create designs that are clear, consistent, and intuitive. I want my designs to be aesthetically pleasing, memorable, and most importantly, easy to use. I strive to create designs that are visually appealing and consistent across an entire ecosystem, ensuring that users remain comfortable and confident as they navigate through the system."
      icon={<MdDesignServices className="h-12 w-12 text-white" />}
      badgeClass="bg-gradient-to-tr from-rose-600 to-red-400"
    />
  </>
);
