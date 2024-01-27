import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="h-44 md:h-14">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#2a2a2a"
            fill-opacity="1"
            d="M0,32L0,192L288,192L288,64L576,64L576,224L864,224L864,64L1152,64L1152,96L1440,96L1440,320L1152,320L1152,320L864,320L864,320L576,320L576,320L288,320L288,320L0,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="bg-theme_color w-screen flex justify-center">
        <div className="md:w-full w-1/2">
          <div className="bg-theme_color font-mont p-10 text-center">
            <p className="text-gray-50 pb-3">NOUR ALDEEN TOFI</p>
            <div className="h-1 border-2 border-white border-dotted"></div>
            <div className="flex justify-between text-gray-50 pt-3 pb-3">
              <a
                href="https://www.linkedin.com/in/nour-tofi-19b116240/"
                target="_blank"
                rel="noopener noreferrer"
                title="Connect with me on LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/NourTofi"
                target="_blank"
                rel="noopener noreferrer"
                title="Connect with me on LinkedIn"
              >
                <FaGithub />
              </a>
              <FaInstagram />
              <FaFacebook />
            </div>
            <div className="h-1 border-2 border-white border-dotted"></div>
            <p className="text-gray-50 my-2">MADE BY ME</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
