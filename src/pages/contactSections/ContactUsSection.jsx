import React from "react";

const ContactUs = () => {
  return (
    <div className="w-screen flex justify-center">
      <div className="md:w-full w-1/2 p-10 shadow-2xl bg-gray-50">
        <h1 className="text-2xl font-semibold">Contact me to know more</h1>
        <input
          type="text"
          placeholder="Name"
          className="w-full border-2 border-gray-400 rounded-md p-1 shadow-lg mt-5"
        />
        <input
          type="text"
          placeholder="Email"
          className="w-full border-2 border-gray-400 rounded-md p-1 shadow-lg mt-5"
        />
        <textarea
          type="text"
          placeholder="Query"
          className="w-full border-2 border-gray-400 rounded-md p-1 shadow-lg mt-5"
        />
        <button className="bg-red-500 rounded text-white px-5 py-1 mt-3 hover:bg-red-600">
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
