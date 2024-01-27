import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zwov6pl",
        "template_h382ngo",
        form.current,
        "kIy71vzlLCg-d9BwA"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("massage sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="w-screen flex justify-center mb-20">
      <div className="md:w-full w-1/2 p-10 shadow-2xl bg-gray-50">
        <h1 className="text-2xl font-semibold">Contact me to know more</h1>
        <form
          ref={form}
          onSubmit={sendEmail}
        >
          <input
            type="text"
            name="user-name"
            placeholder="Name"
            className="w-full border-2 border-gray-400 rounded-md p-1 shadow-lg mt-5"
          />
          <input
            type="email"
            name="user-email"
            placeholder="Email"
            className="w-full border-2 border-gray-400 rounded-md p-1 shadow-lg mt-5"
          />
          <textarea
            type="text"
            name="message"
            placeholder="Query"
            className="w-full border-2 border-gray-400 rounded-md p-1 shadow-lg mt-5"
          />
          <input
            type="submit"
            value="SUBMIT"
            className="bg-red-500 rounded text-white px-5 py-1 mt-3 hover:bg-red-600"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
