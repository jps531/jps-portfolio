/**
 * The JPS App Info configuration type.
 */
export type JPSInfo = {
  firstName: string;
  lastName: string;
  subtitles: string[];
  intro: string;
};

/**
 * The JPS App Info configuration object.
 */
export const appInfo: JPSInfo = {
  firstName: "Paul",
  lastName: "Sullivan",
  subtitles: ["SENIOR SOFTWARE ENGINEER", "FRONTEND", "UI/UX"],
  intro:
    "I’m a full-stack software engineer passionate about crafting clean, consistent, and user-friendly interfaces. I thrive on transforming " +
    "creative ideas into fully realized products that both fulfill and build upon their original vision. I take pride in delivering satisfying user " +
    "experiences by practicing consistency, attention to detail, and creativity across both design and implementation. Whether it’s the " +
    "underlying code or the smallest user-facing detail, I strive to ensure every aspect contributes to an engaging and satisfying experience!",
};
