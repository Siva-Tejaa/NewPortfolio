import React from "react";

import Form from "./Form";
import SocialProfiles from "./SocialProfiles";

const Contact = () => {
  return (
    <section
      id="contact"
      className="p-2 flex flex-col items-center justify-center gap-8 mt-5 pb-12"
    >
      <h1 className="text-3xl font-semibold dark:text-darkheader">Contact</h1>
      <div className="flex flex-col items-center justify-around gap-8 laptop:flex-row desktop:gap-14">
        <SocialProfiles />
        <Form />
      </div>
    </section>
  );
};

export default Contact;
