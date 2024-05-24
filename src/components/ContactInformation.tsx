/* eslint-disable no-multi-str */
// Components & Dependencies
import React from "react";
import clsx from "clsx";
import { useThemeContext } from "./contexts/GlobalThemeContext";
// Icons
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


const ContactInformation = () => {
  const { theme } = useThemeContext();

  return (
    <div
      className={clsx(
        "flex \
        flex-col items-center -mx-4 pb-4 \
        md:h-56 md:items-center md:px-10 md:mt-5 md:flex-row md:font-bold md:-mx-5",
        {
          "bg-[#87cefa] text-[#1e2019]": theme === 'light',
          "bg-[#355691] text-[#ffffff]": theme === 'dark',
        }
      )}
    >
      <h1 className="
      font-bold text-3xl mb-3 mr-0
      md:mb-0 md:mr-16 md:w-1/2 md:text-center md:text-6xl">
        Contact Me
      </h1>

      <div className="flex w-full
      flex-row
      md:h-full md:flex-col md:justify-between md:py-3">
        <div
          className="flex 
          w-1/3 flex-col items-center
          md:w-full md:flex-row md:items-center"
        >
          <a
            href="sms:16822410059"
            target="_blank"
            rel='noreferrer'
          >
            <FaPhone className="text-3xl md:mr-5" />
          </a>
          <div
            className="flex flex-col"
          >
            <h2>
              (682) 241-0059
            </h2>

            <h4>
              SMS is preferred.
            </h4>
          </div>
        </div>

        <div
          className="flex 
          w-1/3 flex-col items-center
          md:w-full md:flex-row md:items-center"
        >
          <a
            href="mailto:bradcodecraft@gmail.com"
            target="_blank"
            rel='noreferrer'
          >
            <MdEmail className="text-3xl md:mr-5" />
          </a>
          <div
            className="flex flex-col"
          >
            <h2>
              bradcodecraft@gmail.com
            </h2>

            <h4>
              I will respond within an hour to two. Please be patient!
            </h4>
          </div>
        </div>

        <div
          className="flex 
          w-1/3 flex-col items-center
          md:w-full md:flex-row md:items-center"
        >
          <a
            href="https://maps.google.com/?q=1719 N Lincoln St, Bloomington, Indiana, 47408"
            target="_blank"
            rel='noreferrer'
          >
            <FaLocationDot className="text-3xl md:mr-5" />
          </a>
          <div
            className="flex flex-col"
          >
            <h2>
              1719 North Lincoln Street
            </h2>

            <h4>
              Bloomington, IN, 47408
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInformation;