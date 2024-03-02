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
      className="p-2 flex flex-col items-center gap-8 mt-8"
    >
      <h1 className="text-3xl font-semibold dark:text-darkheader">Projects</h1>
      <div className="grid grid-cols-[repeat(1,1fr)] gap-4 tablet:gap-8 tablet:grid tablet:grid-cols-[repeat(2,1fr)] laptop:grid laptop:grid-cols-[repeat(3,1fr)] laptop:gap-8">
        {projectsData.map((project) => (
          <a
            href={project?.demo}
            target="_blank"
            key={project?.id}
            className=" border-red-100 p-3 flex flex-col gap-2 bg-white rounded-md hover:bg-stone-50 w-80 tablet:w-[13rem] laptop:w-[14.5rem] laptop:p-3 desktop:w-72 projects dark:bg-darkblack dark:hover:bg-darkblack"
          >
            <img
              src={project?.image}
              alt="project image"
              className="rounded-sm"
            />
            <h4 className="text-sm laptop:text-base dark:text-darkheader">
              {project?.title}
            </h4>
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center gap-2">
                <a
                  href={project?.gitRepo}
                  target="_blank"
                  className="text-primary hover:text-[#8183f0] dark:text-darkprimary"
                >
                  <FiGithub fontSize="1.1em" />
                </a>
                <a
                  href={project?.demo}
                  target="_blank"
                  className="text-primary hover:text-[#8183f0] dark:text-darkprimary"
                >
                  <BiLinkExternal fontSize="1.2em" />
                </a>
              </div>
              <div className="flex items-center">
                {project?.status === "Complete" ? (
                  <a className="text-[#27AE60] text-sm flex items-center gap-1">
                    <FaRegCircleCheck fontSize="1.1em" /> {project?.status}
                  </a>
                ) : (
                  <a className="text-[#F2994A] text-sm flex items-center gap-1">
                    <TbProgressBolt fontSize="1.3em" /> {project?.status}
                  </a>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
