// Turn this function into a React component
import React from "react";
// Importing Icons
import { FaArchway, FaMoon, FaSun } from "react-icons/fa6";
import { FaStore } from "react-icons/fa6";
import { useThemeContext } from "./contexts/GlobalThemeContext";
import { usePageContext } from "./contexts/GlobalPageContext";
// Conditional CSS
import clsx from "clsx";

const NavigationBar = () => {
  const { theme, setTheme } = useThemeContext();
  const { page, setPage } = usePageContext();

  return (
    <div className={clsx(
      // eslint-disable-next-line no-multi-str
      "fixed flex justify-around w-full \
      text-lg \
      md:text-3xl py-2",
      {
        'bg-[#87cefa] text-[#1e2019]': theme === 'light',
        'bg-[#355691] text-[#ffffff]': theme === 'dark'
      }
    )}>
      <button
        onClick={() => page !== 'home' ? setPage('home') : null}
      >
        <FaArchway />
      </button>
      <button
        onClick={() => page !== 'store' ? setPage('store') : null}
      >
        <FaStore />
      </button>
      <button
        onClick={() => theme === 'light' ? setTheme('dark') : setTheme('light')}
      >
        {
          theme === 'light' ?
            <FaSun /> :
            <FaMoon />
        }
      </button>
    </div>
  )
}

export default NavigationBar;