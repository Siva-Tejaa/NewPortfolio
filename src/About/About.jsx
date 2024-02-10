import React from "react";
import { Chrono } from "react-chrono";

import { timelineData } from "../utils/Constants";

const About = () => {
  return (
    <section
      id="about"
      className="p-2 flex flex-col items-center justify-center gap-8"
    >
      <h1 className="text-3xl font-semibold">About</h1>
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
