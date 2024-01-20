import React from "react";
import "./Skills.css";
import { techStack } from "../utils/Constants";

const Skills = () => {
  return (
    <div
      id="skills"
      className="p-2 flex flex-col items-center gap-8 min-h-[100vh]"
    >
      <h1 className="text-3xl">Skills</h1>
      <div className="grid grid-cols-[repeat(2,1fr)] gap-4 tablet:gap-8 laptop:grid laptop:grid-cols-[repeat(3,1fr)] laptop:gap-8 desktop:grid desktop:grid-cols-[repeat(4,1fr)] desktop:gap-8">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="p-2 flex items-center justify-around gap-2 bg-white rounded-md w-40 laptop:w-48 skillTech"
          >
            <img src={tech.image} width="50" />
            <div className="flex flex-col items-center">
              <h4 className="text-xs laptop:text-base">{tech.name}</h4>
              <p className="text-[10px] text-gray-400 laptop:text-xs">
                {tech.level}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
