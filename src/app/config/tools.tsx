import { JSX } from "react";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { DiJenkins } from "react-icons/di";
import {
  FaReact,
  FaPython,
  FaJava,
  FaDocker,
  FaMicrosoft,
  FaApple,
} from "react-icons/fa";
import { GoCopilot } from "react-icons/go";
import { GrGraphQl } from "react-icons/gr";
import { IoLogoGithub } from "react-icons/io5";
import { PiFigmaLogoDuotone, PiGitlabLogoDuotone } from "react-icons/pi";
import {
  RiJavascriptFill,
  RiNextjsFill,
  RiNodejsLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiTrpc,
  SiPrisma,
  SiAnsible,
  SiJira,
  SiNginxproxymanager,
  SiTurborepo,
  SiStorybook,
  SiKeycloak,
  SiPosthog,
  SiDbeaver,
  SiAdobephotoshop,
  SiAffinitydesigner,
} from "react-icons/si";
import { TbApiApp } from "react-icons/tb";
import { VscVscodeInsiders } from "react-icons/vsc";
import { ToolBadge } from "../components/tool-badge";

/**
 * The tools to display.
 */
export const tools: JSX.Element = (
  <>
    <ToolBadge
      title="TypeScript"
      link="https://www.typescriptlang.org/"
      icon={<BiLogoTypescript className="h-8 w-8 text-white" />}
      badgeClass="bg-sky-700"
    />
    <ToolBadge
      title="JavaScript"
      link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      icon={<RiJavascriptFill className="h-8 w-8 text-black" />}
      badgeClass="bg-yellow-400 text-black"
    />
    <ToolBadge
      title="React"
      link="https://react.dev/"
      icon={<FaReact className="h-8 w-8 text-black" />}
      badgeClass="bg-cyan-400 text-black"
    />
    <ToolBadge
      title="Next.js"
      link="https://nextjs.org/"
      icon={<RiNextjsFill className="h-8 w-8 text-white" />}
      badgeClass="bg-zinc-900"
    />
    <ToolBadge
      title="Node.js"
      link="https://nodejs.org/"
      icon={<RiNodejsLine className="h-8 w-8 text-black" />}
      badgeClass="bg-lime-500 text-black"
    />
    <ToolBadge
      title="Tailwind CSS"
      link="https://tailwindcss.com/"
      icon={<RiTailwindCssFill className="h-8 w-8 text-white" />}
      badgeClass="bg-sky-500"
    />
    <ToolBadge
      title="Python"
      link="https://www.python.org/"
      icon={<FaPython className="h-8 w-8 text-white" />}
      badgeClass="bg-blue-600"
    />
    <ToolBadge
      title="Java"
      link="https://www.java.com/"
      icon={<FaJava className="h-8 w-8 text-white" />}
      badgeClass="bg-orange-600"
    />
    <ToolBadge
      title="PostgreSQL"
      link="https://www.postgresql.org/"
      icon={<BiLogoPostgresql className="h-8 w-8 text-white" />}
      badgeClass="bg-cyan-600"
    />
    <ToolBadge
      title="TRPC"
      link="https://trpc.io/"
      icon={<SiTrpc className="h-8 w-8 text-white" />}
      badgeClass="bg-cyan-500"
    />
    <ToolBadge
      title="Prisma"
      link="https://www.prisma.io/"
      icon={<SiPrisma className="h-8 w-8 text-white" />}
      badgeClass="bg-violet-600"
    />
    <ToolBadge
      title="REST APIs"
      link="https://www.redhat.com/en/topics/api/what-is-a-rest-api"
      icon={<TbApiApp className="h-8 w-8 text-white" />}
      badgeClass="bg-rose-600"
    />
    <ToolBadge
      title="GraphQL"
      link="https://graphql.org/"
      icon={<GrGraphQl className="h-8 w-8 text-black" />}
      badgeClass="bg-pink-400 text-black"
    />
    <ToolBadge
      title="VS Code"
      link="https://code.visualstudio.com/"
      icon={<VscVscodeInsiders className="h-8 w-8 text-white" />}
      badgeClass="bg-blue-600"
    />
    <ToolBadge
      title="Figma"
      link="https://www.figma.com/"
      icon={<PiFigmaLogoDuotone className="h-8 w-8 text-white" />}
      badgeClass="!bg-gradient-to-r !from-red-500 !via-purple-500 !to-emerald-500"
    />
    <ToolBadge
      title="Docker"
      link="https://www.docker.com/"
      icon={<FaDocker className="h-8 w-8 text-white" />}
      badgeClass="bg-blue-500"
    />
    <ToolBadge
      title="Ansible"
      link="https://docs.ansible.com/"
      icon={<SiAnsible className="h-8 w-8 text-white" />}
      badgeClass="bg-zinc-900"
    />
    <ToolBadge
      title="GitHub"
      link="https://github.com/"
      icon={<IoLogoGithub className="h-8 w-8 text-white" />}
      badgeClass="bg-zinc-800"
    />
    <ToolBadge
      title="GitLab"
      link="https://about.gitlab.com/"
      icon={<PiGitlabLogoDuotone className="h-8 w-8 text-white" />}
      badgeClass="bg-orange-500"
    />
    <ToolBadge
      title="GitHub CoPilot"
      link="https://github.com/features/copilot"
      icon={<GoCopilot className="h-8 w-8 text-white" />}
      badgeClass="!bg-gradient-to-r !from-teal-400 !via-blue-600 !to-purple-600"
    />
    <ToolBadge
      title="Jenkins"
      link="https://www.jenkins.io/"
      icon={<DiJenkins className="h-8 w-8 text-white" />}
      badgeClass="bg-red-500"
    />
    <ToolBadge
      title="Jira"
      link="https://www.atlassian.com/software/jira"
      icon={<SiJira className="h-8 w-8 text-white" />}
      badgeClass="bg-blue-600"
    />
    <ToolBadge
      title="NGINX Proxy Manager"
      link="https://nginxproxymanager.com/"
      icon={<SiNginxproxymanager className="h-8 w-8 text-white" />}
      badgeClass="!bg-gradient-to-r !from-orange-500 !via-red-500 !to-purple-600"
    />
    <ToolBadge
      title="Turbo"
      link="https://turbo.build/"
      icon={<SiTurborepo className="h-8 w-8 text-white" />}
      badgeClass="!bg-gradient-to-r !from-red-500 !to-blue-600"
    />
    <ToolBadge
      title="Storybook"
      link="https://storybook.js.org/"
      icon={<SiStorybook className="h-8 w-8 text-white" />}
      badgeClass="!bg-gradient-to-r !from-pink-500 !via-pink-600 !to-blue-600"
    />
    <ToolBadge
      title="Keycloak"
      link="https://www.keycloak.org/"
      icon={<SiKeycloak className="h-8 w-8 text-white" />}
      badgeClass="!bg-gradient-to-r !from-sky-300 !to-sky-500"
    />
    <ToolBadge
      title="PostHog"
      link="https://posthog.com/"
      icon={<SiPosthog className="h-8 w-8 text-white" />}
      badgeClass="!bg-gradient-to-r !from-blue-500 !via-orange-600 !to-amber-500"
    />
    <ToolBadge
      title="DBeaver"
      link="https://dbeaver.io/"
      icon={<SiDbeaver className="h-8 w-8 text-orange-950" />}
      badgeClass="bg-blue-300 text-orange-950"
    />
    <ToolBadge
      title="MS Office"
      link="https://www.office.com/"
      icon={<FaMicrosoft className="h-8 w-8 text-white" />}
      badgeClass="bg-orange-600"
    />
    <ToolBadge
      title="iWork"
      link="https://www.apple.com/iwork/"
      icon={<FaApple className="h-8 w-8 text-white" />}
      badgeClass="!bg-gradient-to-r !from-blue-500 !to-green-500"
    />
    <ToolBadge
      title="Adobe Photoshop"
      link="https://www.adobe.com/products/photoshop.html"
      icon={<SiAdobephotoshop className="h-8 w-8 text-white" />}
      badgeClass="!bg-gradient-to-r !from-blue-900 !to-blue-800"
    />
    <ToolBadge
      title="Affinity Designer"
      link="https://affinity.serif.com/en-us/designer/"
      icon={<SiAffinitydesigner className="h-8 w-8 text-white" />}
      badgeClass="!bg-gradient-to-r !from-blue-700 !to-blue-600"
    />
  </>
);
