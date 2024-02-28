import React from "react";

import { contactData, shareIcon, socialMedia } from "../utils/Constants";

const Contact = () => {
  return (
    <section
      id="contact"
      className="p-2 flex flex-col items-center gap-8 mt-5 pb-12"
    >
      <h1 className="text-3xl font-semibold">Contact</h1>
      <div className="flex flex-col items-center justify-around gap-8 laptop:flex-row">
        <div className="flex flex-col items-center justify-around gap-4">
          {contactData.map((data) => (
            <div
              key={data.id}
              className="flex items-center gap-4 bg-background2 rounded-md p-4 min-w-[22rem] tablet:w-[26rem] "
            >
              <div className="p-4 rounded-full bg-slate-300 text-primary">
                {data.icon}
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-lg font-semibold text-gray-500">
                  {data.name}
                </div>
                <a href={data.link} className="text-sm text-primary">
                  {data.content}
                </a>
              </div>
            </div>
          ))}

          <div className="flex items-center gap-4 bg-background2 rounded-md p-4 min-w-[22rem] tablet:w-[26rem]">
            <div className="p-4 rounded-full bg-slate-300 text-primary">
              {shareIcon}
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-lg font-semibold text-gray-500">
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
        <form
          autoComplete="off"
          className="bg-background2 p-6 py-8 rounded-md flex flex-col gap-6 w-[100%] caret-[#6466ff] max-w-[22rem] tablet:max-w-[26rem]"
        >
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="First Name"
              className="p-2 rounded-sm w-[100%] focus:outline-primary"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="p-2 rounded-sm w-[100%] focus:outline-primary"
            />
          </div>
          <div>
            <input
              type="email"
              inputMode="email"
              placeholder="Email"
              className="p-2 w-[100%] rounded-sm focus:outline-primary"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Subject"
              className="p-2 w-[100%] rounded-sm focus:outline-primary"
            />
          </div>
          <div>
            <textarea
              placeholder="Message..."
              rows={4}
              className="resize-none p-2 w-[100%] rounded-sm focus:outline-primary"
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-primary p-2 rounded-sm text-white font-medium w-[100%] hover:bg-[#6466ff]"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
