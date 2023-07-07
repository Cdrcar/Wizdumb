import React from "react";
import brainLogo from "../assets/brainLogo.json";

import Lottie from "lottie-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-cyan-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
        <a href="/" className="flex items-center">
          <Lottie
            animationData={brainLogo}
            className="h-20 mr-3"
            alt="Wizdumb Logo"
          />
          <span className="self-center text-2xl text-sky-400 whitespace-nowrap text-white">
            Wiz
            <span className="text-white">Dumb</span>
          </span>
        </a>
        <div className="hidden w-full md:block md:w-auto">
          <ul className="flex flex-col font-medium p-0 pr-4  mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li className="font-medium block py-2 pl-3 pr-4 text-white md:p-0 border-transparent hover:border-red-500 transition duration-250 border-b-2">
              <a href="#courses">Courses</a>
            </li>
            <li className="font-medium block py-2 pl-3 pr-4 text-white md:p-0 border-transparent hover:border-red-500 transition duration-250 border-b-2">
              <a href="/">Account</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
