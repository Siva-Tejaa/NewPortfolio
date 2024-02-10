import React from "react";
import "./Projects.css";

import { FiGithub } from "react-icons/fi";
import { BiLinkExternal } from "react-icons/bi";
import { TbProgressBolt } from "react-icons/tb";

import { FaRegCircleCheck } from "react-icons/fa6";

import { projectsData } from "../utils/Constants";

const Projects = () => {
  return (
    <section
      id="projects"
      className="p-2 flex flex-col items-center gap-8 min-h-[100vh]"
    >
      <h1 className="text-3xl font-semibold">Projects</h1>
      <div className="grid grid-cols-[repeat(2,1fr)] gap-4 tablet:gap-8 laptop:grid laptop:grid-cols-[repeat(3,1fr)] laptop:gap-8 desktop:grid desktop:grid-cols-[repeat(4,1fr)] desktop:gap-8">
        {projectsData.map((project) => (
          <div
            key={project?.id}
            className=" border-red-100 p-2 flex flex-col gap-2 bg-white rounded-md w-40 laptop:w-64 laptop:p-3 projects"
          >
            <img
              src={project?.image}
              alt="project image"
              className="rounded-sm"
            />
            <h4 className="text-sm laptop:text-base">{project?.title}</h4>
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center">
                <FiGithub fontSize="1.1em" />
                <BiLinkExternal fontSize="1.2em" />
              </div>
              <div className="flex items-center">
                <TbProgressBolt fontSize="1.3em" />
                <FaRegCircleCheck fontSize="1.1em" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
