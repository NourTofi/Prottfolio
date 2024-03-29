import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function Header() {
  const [showMenu, setShowMenu] = useState("md:hidden");
  const menuItems = [
    {
      title: "Home",
      key: "/",
    },
    {
      title: "Projects",
      key: "/projects",
    },
    {
      title: "Contact",
      key: "/contact",
    },
  ];
  const pathNme = window.location.pathname;
  return (
    <div className={`text-white font-mont fixed top-0 left-0 right-0 z-50`}>
      <div
        className={`flex bg-theme_color justify-between items-center p-2 shadow-lg ${
          showMenu === "" && "md:flex-col"
        }`}
      >
        <div className="flex justify-between items-center w-full">
          <Link to="/">
            <h1 className="text-4xl font-semibold hover:text-yellow-500 cursor-pointer">
              N O U R
            </h1>
          </Link>
          <FaBars
            onClick={() => {
              showMenu === "md:hidden"
                ? setShowMenu("")
                : setShowMenu("md:hidden");
            }}
            className="sm:flex 2xl:hidden xl:hidden lg:hidden  3xl:hidden cursor-pointer"
          />
        </div>
        <div className={`flex md:hidden`}>
          {menuItems.map((item) => {
            return (
              <li
                className={`list-none mx-5 p-1 ${
                  item.key === pathNme && "bg-white text-black rounded-md"
                }`}
              >
                <Link to={`${item.key}`}>{item.title}</Link>
              </li>
            );
          })}
        </div>

        <div
          className={`md:flex w-full items-start flex-col lg:hidden 2xl:hidden 3xl:hidden xl:hidden ${showMenu}`}
        >
          {menuItems.map((item) => {
            return (
              <li
                className={`list-none my-5 p-1 ${
                  item.key === pathNme && "bg-white text-black rounded-md"
                }`}
              >
                <Link to={`${item.key}`}>{item.title}</Link>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Header;
