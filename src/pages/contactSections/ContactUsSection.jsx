import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setErrors({});

    const userName = form.current["user-name"].value;
    const userEmail = form.current["user-email"].value;
    const message = form.current.message.value;

    const emailRegex = /\S+@\S+\.\S+/;
    const isEmailValid = emailRegex.test(userEmail);

    let newErrors = {};
    if (!userName.trim()) {
      newErrors.userName = "Name cannot be empty.";
    }
    if (!userEmail.trim()) {
      newErrors.userEmail = "Email cannot be empty.";
    } else if (!isEmailValid) {
      newErrors.userEmail = "Email is not valid.";
    }
    if (!message.trim()) {
      newErrors.message = "Message cannot be empty.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    emailjs
      .sendForm(
        "service_zwov6pl",
        "template_h382ngo",
        form.current,
        "kIy71vzlLCg-d9BwA"
      )
      .then(() => {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 5000);
        e.target.reset();
      });
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
          {errors.userName && (
            <p className="text-red-500 text-xs italic">{errors.userName}</p>
          )}

          <input
            type="email"
            name="user-email"
            placeholder="Email"
            className="w-full border-2 border-gray-400 rounded-md p-1 shadow-lg mt-5"
          />
          {errors.userEmail && (
            <p className="text-red-500 text-xs italic">{errors.userEmail}</p>
          )}

          <textarea
            name="message"
            placeholder="Query"
            className="w-full border-2 border-gray-400 rounded-md p-1 shadow-lg mt-5"
          />
          {errors.message && (
            <p className="text-red-500 text-xs italic">{errors.message}</p>
          )}

          <input
            type="submit"
            value="SUBMIT"
            className="bg-red-500 rounded text-white px-5 py-1 mt-3 hover:bg-red-600"
          />
        </form>
      </div>
      {showToast && (
        <div className="fixed bottom-5 right-5 md:bottom-10 md:right-10 p-4 bg-green-500 text-white rounded-lg shadow-xl transition-opacity duration-500">
          <p>Message sent successfully!</p>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
