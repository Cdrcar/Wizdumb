import React, { useState } from 'react';
import AuthService from '../utils/auth';
import brainLogo from "../assets/brainLogo.json";
import { Link } from 'react-router-dom';
// TODO: my-courses component and route

import Lottie from "lottie-react";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleAccountClick = () => {
    if (AuthService.loggedIn()) {
      setMenuVisible(!menuVisible);
    }
  };

  const handleLogout = () => {
    AuthService.logout();
  };

  return (
    <nav className="sticky top-0 z-50 bg-cyan-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
        <Link to="/" className="flex items-center">
          <Lottie
            animationData={brainLogo}
            className="h-20 mr-3"
            alt="Wizdumb Logo"
          />
          <span className="self-center text-2xl text-sky-400 whitespace-nowrap text-white">
            Wiz
            <span className="text-white">Dumb</span>
          </span>
        </Link>
        <div className="hidden w-full md:block md:w-auto">

          {/* Courses */}
          <ul className="flex flex-col font-medium p-0 pr-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li className="font-medium block py-2 pl-3 pr-4 text-white md:p-0 border-transparent hover:border-red-500 transition duration-250 border-b-2">
              <a href="#courses">Courses</a>
            </li>


          {/* Account */}
            <li
              className="font-medium block py-2 pl-3 pr-4 text-white md:p-0 border-transparent hover:border-red-500 transition duration-250 border-b-2"
              onClick={handleAccountClick}
            >
              <span>Account</span>
              {menuVisible && (
                <ul className="absolute right-0 top-8 bg-white p-2 shadow-md">
                  {AuthService.loggedIn() ? (
                    <>
                      <li>
                        <Link to="/my-courses">My Courses</Link>
                      </li>
                      <li>
                        <Link to="/profile">Edit</Link>
                      </li>
                      <li onClick={handleLogout}>
                        <Link to="/">Logout</Link>
                      </li>
                    </>
                  ) : (
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                  )}
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
