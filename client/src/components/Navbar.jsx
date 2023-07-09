import React, { useState } from "react";
import AuthService from "../utils/auth";
import brainLogo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import LoggedOutNav from "./LoggedOutNav";
// TODO: my-courses component and route

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
    <nav className="sticky top-0 z-50 bg-white border-b-2 border-b-gray-100">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
        <Link to="/" className="flex items-center">
          <img src={brainLogo} className="h-10 mr-3 ml-10" alt="logo" />
          <span className="self-center text-2xl text-sky-400 whitespace-nowrap">
            Wiz
            <span className="text-cyan-700">Dumb</span>
          </span>
        </Link>
        <div className="hidden w-full md:block md:w-auto">
          {/* Courses */}
          <ul>
            <LoggedOutNav />
            {/* <li className="font-medium block py-2 pl-3 pr-4 md:p-0 border-transparent hover:border-red-500 transition duration-250 border-b-2">
              <a href="#courses">Courses</a>
            </li>

            {/* Account 
            <li
              className="font-medium block py-2 pl-3 pr-4 md:p-0 border-transparent hover:border-red-500 transition duration-250 border-b-2"
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
            </li>*/}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
