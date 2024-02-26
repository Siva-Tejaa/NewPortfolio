import React, { useContext } from "react";
import "./Home.css";

import { Typewriter } from "react-simple-typewriter";

import { PortfolioProfile, SivaTejaResume } from "../utils/Constants";

import { MdOutlineFileDownload } from "react-icons/md";
import { BiMessageSquareDetail } from "react-icons/bi";

import { Context } from "../utils/Context";

const Home = () => {
  const { scrollToTarget } = useContext(Context);
  return (
    <section
      id="home"
      className="p-2 flex flex-col-reverse items-center justify-center laptop:flex-row mb-12 pt-12"
    >
      <div className="flex flex-col items-center gap-2 max-w-[520px] mb-20 laptop:min-w-[520px] laptop:mb-0 laptop:w-[520px]">
        <h4 className="text-primary font-semibold text-sm laptop:text-base">
          Hello, I'm
        </h4>
        <h2
          className=" font-bold text-4xl laptop:text-5xl"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Siva Teja
          <span className="blinking-cursor text-primary font-light">|</span>
        </h2>

        <div>
          <Typewriter
            words={[
              "Front-End Developer",
              "Web Developer",
              "ReactJs Developer",
            ]}
            loop={0}
            cursor
          />
        </div>
        <h5 className="text-justify text-sm laptop:text-base">
          A passionate front-end developer with 2.5+ years of experience in
          designing and developing highly responsive websites with elegant and
          efficient code.
        </h5>
        <div className="flex items-center justify-around gap-4 text-sm laptop:text-base">
          <a
            className="p-[0.6rem] flex items-center gap-1 bg-primary rounded-md text-white cursor-pointer hover:bg-[#6466ff]"
            href={SivaTejaResume}
            target="_blank"
          >
            Download CV
            <MdOutlineFileDownload fontSize="1.3em" />
          </a>
          <button
            className="p-[0.6rem] flex items-center gap-1 border-2 rounded-md text-black hover:bg-gray-100"
            onClick={() => scrollToTarget("contact")}
          >
            Contact Me
            <BiMessageSquareDetail fontSize="1.3em" />
          </button>
        </div>
      </div>
      <div className="">
        <img
          src={PortfolioProfile}
          alt="Portfolio-Profile"
          className="w-80 laptop:w-[100%]"
        />
      </div>
    </section>
  );
};

export default Home;
