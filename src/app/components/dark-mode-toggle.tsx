/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoMoon, IoSunny } from "react-icons/io5";
import { CgDarkMode } from "react-icons/cg";

/**
 * The dark mode selector component.
 */
export const DarkModeSelector = () => {
  /** TYPES */

  type ThemeOptions = "light" | "dark" | "system";

  /** HOOKS */

  /**
   * The current theme state.
   */
  const [theme, setTheme] = useState<ThemeOptions>("system");

  /**
   * Actions taken when the theme value changes
   */
  useEffect(() => {
    // Set theme if local storage has conflicting value
    if (theme === "system") {
      const localTheme = localStorage.theme as ThemeOptions | undefined;
      if (localTheme) {
        setTheme(localTheme);
      }
    }

    // Toggle the dark class on the document element
    toggleDocumentDarkClass();
  }, [theme]);

  /**
   * Detects when the system setting for dark mode changes.
   */
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", toggleDocumentDarkClass);
  }, []);

  /** FUNCTIONS */

  /**
   * Toggles the "dark" class on the document element.
   */
  const toggleDocumentDarkClass = () => {
    document.documentElement.classList.toggle(
      "dark",
      theme === "dark" ||
        (theme === "system" &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  };

  /**
   * Sets the theme to light.
   */
  const setLight = () => {
    localStorage.theme = "light";
    setTheme("light");
  };

  /**
   * Sets the theme to dark.
   */
  const setDark = () => {
    localStorage.theme = "dark";
    setTheme("dark");
  };

  /**
   * Sets the theme to system.
   */
  const setSystem = () => {
    localStorage.removeItem("theme");
    setTheme("system");
  };

  /** RETURN */

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-jps-green dark:text-jps-cream h-6 w-10 rounded-xl font-montserrat">
        <div className="flex items-center justify-center h-full w-full">
          <CgDarkMode />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="text-jps-green dark:text-jps-cream w-fit font-montserrat uppercase font-semibold">
        <DropdownMenuRadioGroup
          value={theme}
          onValueChange={(value) => {
            if (value === "light") {
              setLight();
            } else if (value === "dark") {
              setDark();
            } else {
              setSystem();
            }
          }}
        >
          <DropdownMenuRadioItem value="light">
            <div className="flex items-center gap-2">
              <IoSunny /> Light
            </div>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="dark">
            <div className="flex items-center gap-2">
              <IoMoon /> Dark
            </div>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="system">
            <div className="flex items-center gap-2">
              <CgDarkMode /> Use System Setting
            </div>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
