import React, { useState } from "react";
import "./Contact.css";

import emailjs from "@emailjs/browser";

const Form = () => {
  const initialFormvalues = {
    firstname: "",
    lastname: "",
    email: "",
    subject: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormvalues);
  const [errorMessage, setErrorMessage] = useState(false);

  const [disableButton, setdisableButton] = useState(false);

  const { firstname, lastname, email, subject, message } = formData;

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMessage(false);
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    if (
      firstname === "" ||
      lastname === "" ||
      email === "" ||
      subject === "" ||
      message === ""
    ) {
      setErrorMessage(true);
    } else {
      setFormData(initialFormvalues);
      setdisableButton(true);

      await emailjs
        .sendForm(
          "service_lr6hzga",
          "template_ecg43ci",
          e.target,
          "0iM_FhvYp72UV329C"
        )
        .then(
          (result) => {
            setdisableButton(false);
            alert("Thanks For Sending a mail to me... Will contact Soon");
          },
          (error) => {
            setdisableButton(false);
            alert("Something Went Wrong...Please Try Again");
          }
        );

      e.target.reset();
    }
  };

  return (
    <form
      autoComplete="off"
      onSubmit={formSubmitHandler}
      className="bg-background2 p-6 pb-8 rounded-md flex flex-col gap-6 w-[100%] caret-[#6466ff] max-w-[22rem] tablet:max-w-[26rem]"
    >
      <div className="text-primary font-bold text-lg laptop:text-xl">
        Get in Touch
      </div>
      <div>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="First Name"
            name="firstname"
            value={firstname}
            onChange={changeHandler}
            required
            className="p-2 rounded-sm w-[100%] focus:outline-primary"
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastname"
            value={lastname}
            onChange={changeHandler}
            required
            className="p-2 rounded-sm w-[100%] focus:outline-primary"
          />
        </div>
        <p className={errorMessage ? "text-xs text-red-500" : "hidden"}>
          FirstName & LastName is required
        </p>
      </div>

      <div>
        <input
          type="email"
          inputMode="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={changeHandler}
          required
          className="p-2 w-[100%] rounded-sm focus:outline-primary"
        />
        <p className={errorMessage ? "text-xs text-red-500" : "hidden"}>
          Email is required
        </p>
      </div>
      <div>
        <input
          type="text"
          placeholder="Subject"
          name="subject"
          value={subject}
          onChange={changeHandler}
          required
          className="p-2 w-[100%] rounded-sm focus:outline-primary"
        />
        <p className={errorMessage ? "text-xs text-red-500" : "hidden"}>
          Subject is required
        </p>
      </div>
      <div>
        <textarea
          placeholder="Message..."
          rows={4}
          name="message"
          value={message}
          onChange={changeHandler}
          required
          className="resize-none p-2 w-[100%] rounded-sm focus:outline-primary"
        />
        <p className={errorMessage ? "text-xs text-red-500" : "hidden"}>
          Message is required
        </p>
      </div>
      <div>
        <button
          type="submit"
          disabled={disableButton}
          className={
            disableButton
              ? "bg-[#9a9cf3] p-1 rounded-sm text-white font-medium w-[100%] cursor-not-allowed"
              : "bg-primary p-2 rounded-sm text-white font-medium w-[100%] hover:bg-[#6466ff]"
          }
        >
          {disableButton ? <span className="loader"></span> : "Send Message"}
        </button>
      </div>
    </form>
  );
};

export default Form;
