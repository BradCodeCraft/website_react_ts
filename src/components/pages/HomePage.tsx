/* eslint-disable no-multi-str */
import React from "react";
import clsx from "clsx";

import { useThemeContext } from "../contexts/GlobalThemeContext";

import ContactInformation from "../ContactInformation";

const HomePage = () => {
  const { theme } = useThemeContext();

  return (
    <div className={clsx(
      "pt-8 \
      md:pt-12 md:px-5 md:min-h-screen",
      {
        "text-[#1e2019]": theme === 'light',
        "bg-[#1e2019] text-[#ffffff]": theme === 'dark',
      })}
    >
      <h1
        className="
        md:mb-5
        "
      >
        Home
      </h1>

      <h2
        className="
        md:mb-5
        "
      >
        Welcome, wanderers!
      </h2>

      <h3
        className="
      md:mb-5
      "
      >
        It appears to me that you have wandered into Kingdom of TypeScript filled with knowledge and mystery. Prepare to embark on a quest like no other, where coding and debugging are your greatest allies, and the treasures of ancient lore await those brave enough to seek them.
      </h3>

      <h3
        className="
      md:mb-5
      "
      >
        In this enchanted realm, you will traverse TS codes teeming with unfinished documentation and delve into CSS dungeons echoing with the screams of previous wanderers trying to escape.
      </h3>

      <h3
        className="
      md:mb-5
      "
      >
        Gather your tech stack, your party of enthusiastic programmers, and your realiable computer and peripherals and start the journey right here at the Home Page.
      </h3>

      <h4>
        May luck be by your side!
      </h4>

      <ContactInformation />
    </div>
  )
}

export default HomePage;