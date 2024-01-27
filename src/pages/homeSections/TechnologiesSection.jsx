import React from "react";
import Typescript from "../../asset/typescript.png"
import Twailind from "../../asset/tailwind-css.1024x615.png";
import {
  FaCss3,
  FaHtml5,
  FaJsSquare,
  FaReact,
} from "react-icons/fa";

const Technologies = () => {
  return (
    <div className="mt-20">
      <h1
        className="text-4xl text-blue-800 font-bold text-center my-10"
        data-aos="slide-up"
      >
        Technologies I USE
      </h1>
      <div className="grid md:grid-cols-1 grid-cols-3">
        <FaReact
          size={180}
          color="cyan"
          className="w-full text-center mt-20 animate-bounce"
        />
        <img
          src={Typescript}
          alt="TypeScript Logo"
          style={{ width: "180px", height: "180px" }}
          className="ml-40 md:ml-28 w-full text-center mt-20 animate-bounce"
        />
        <img
          src={Twailind}
          alt="TypeScript Logo"
          style={{ width: "180px", height: "180px" }}
          className="ml-48  md:ml-32 w-full text-center mt-20"
        />
        <FaJsSquare
          size={180}
          color="orange"
          className="w-full text-center mt-20 "
        />
        <FaHtml5
          size={180}
          color="red"
          className="w-full text-center mt-20"
        />
        <FaCss3
          size={180}
          color="blue"
          className="w-full text-center mt-20 animate-bounce"
        />
      </div>
    </div>
  );
};

export default Technologies;
