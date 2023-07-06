import React from "react";
import { node } from "../assets";

const Navbar = () => {
  return (
    <nav className="bg-darkblue border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
        <a href="/" className="flex items-center">
          <img src={node} className="h-8 mr-3" alt="Wizdumb Logo" />
          <span className="self-center text-2xl font-black whitespace-nowrap text-background">
            Wiz
            <span className="text-background">Dumb</span>
          </span>
        </a>
        <div className="hidden w-full md:block md:w-auto">
          <ul className="flex flex-col font-medium p-0 pr-4  mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li className="font-medium block py-2 pl-3 pr-4 text-background md:p-0 border-transparent hover:border-accent transition duration-250 border-b-2">
              <a href="/">Courses</a>
            </li>
            <li className="font-medium block py-2 pl-3 pr-4 text-background md:p-0 border-transparent hover:border-accent transition duration-250 border-b-2">
              <a href="/">Account</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
