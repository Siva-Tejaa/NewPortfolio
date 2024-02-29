import React from "react";

import { contactData, shareIcon, socialMedia } from "../utils/Constants";

const SocialProfiles = () => {
  return (
    <div className="flex flex-col items-center justify-around gap-4 laptop:gap-6">
      {contactData.map((data) => (
        <div
          key={data.id}
          className="flex items-center gap-4 bg-background2 rounded-md p-4 min-w-[22rem] tablet:w-[26rem] laptop:w-[22rem] desktop:w-[26rem]"
        >
          <div className="p-4 rounded-full bg-slate-300 text-primary">
            {data.icon}
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-base font-semibold text-gray-500 laptop:text-lg">
              {data.name}
            </div>
            <a href={data.link} className="text-sm text-primary">
              {data.content}
            </a>
          </div>
        </div>
      ))}

      <div className="flex items-center gap-4 bg-background2 rounded-md p-4 min-w-[22rem] tablet:w-[26rem] laptop:w-[22rem] desktop:w-[26rem]">
        <div className="p-4 rounded-full bg-slate-300 text-primary">
          {shareIcon}
        </div>
        <div className="flex flex-col gap-[0.4rem]">
          <div className="text-base font-semibold text-gray-500 laptop:text-lg">
            Social Profiles
          </div>
          <div className="flex items-center gap-2">
            {socialMedia.map((socialMedia) => (
              <a
                key={socialMedia.id}
                href={socialMedia.link}
                target="_blank"
                className=""
              >
                <img src={socialMedia?.icon} width="20px" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProfiles;
