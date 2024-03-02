import React, { useState, useContext } from "react";
import { Chrono } from "react-chrono";
import { Context } from "../utils/Context";

import { timelineData, aboutMe } from "../utils/Constants";

const About = () => {
  const { darkMode, chronoRender } = useContext(Context);

  const primaryColor = !darkMode ? "#474BFF" : "#878AEF";
  const titleColor = !darkMode ? "#000000" : "#FFFF";
  const cardColor = !darkMode ? "#FFFF" : "#3C4042";

  return (
    <section
      id="about"
      className="p-2 flex flex-col items-center justify-center gap-8 mt-5"
    >
      <h1 className="text-3xl font-semibold dark:text-darkheader">About</h1>
      <div className="flex items-center justify-center gap-2">
        {aboutMe.map((about) => (
          <div
            key={about.title}
            className="bg-white flex flex-col items-center justify-center gap-1 border-[2px] px-1 py-2 rounded-md w-[7.3rem] laptop:w-32 p-2 dark:bg-darkblack dark:text-darknormal dark:border-[1px] dark:border-[#363B3D]"
          >
            {about.icon}
            <p className="text-sm tablet:text-sm laptop:text-base">
              {about.title}
            </p>
            <p className="text-[11px] text-gray-400 line-clamp-1 laptop:text-xs">
              {about.subtitle}
            </p>
          </div>
        ))}
      </div>
      <Chrono
        key={chronoRender}
        items={timelineData}
        mode="VERTICAL_ALTERNATING"
        // twoColumns
        cardHeight="100"
        cardWidth="350"
        disableAutoScrollOnClick
        disableClickOnCircle
        hideControls="true"
        disableNavOnKey
        theme={{
          primary: primaryColor,
          secondary: "transparent",
          titleColor: titleColor,
          titleColorActive: primaryColor,
          cardBgColor: cardColor,
        }}
      >
        {timelineData.map((data) => (
          <div key={data.name} className="">
            <h3 className="font-semibold text-sm laptop:text-base dark:text-darkheader tracking-[1.2px]">
              {data.position}
            </h3>
            <p className="text-sm laptop:text-base dark:text-darknormal">
              {data.name}
            </p>
          </div>
        ))}
      </Chrono>
    </section>
  );
};

export default About;
