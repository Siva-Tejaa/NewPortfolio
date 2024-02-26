import React from "react";
import { Chrono } from "react-chrono";

import { timelineData, aboutMe } from "../utils/Constants";

const About = () => {
  return (
    <section
      id="about"
      className="p-2 flex flex-col items-center justify-center gap-8 mt-5"
    >
      <h1 className="text-3xl font-semibold">About</h1>
      <div className="flex items-center justify-center gap-2">
        {aboutMe.map((about) => (
          <div
            key={about.title}
            className="bg-white flex flex-col items-center justify-center gap-1 border-2 px-1 py-2 rounded-md w-[7.3rem] laptop:w-32 p-2"
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
          primary: "#474BFF",
          secondary: "transparent",
          titleColorActive: "#474BFF",
        }}
      >
        {timelineData.map((data) => (
          <div key={data.name} className="">
            <h3 className="font-semibold text-sm laptop:text-base">
              {data.position}
            </h3>
            <p className="text-sm laptop:text-base">{data.name}</p>
          </div>
        ))}
      </Chrono>
    </section>
  );
};

export default About;
