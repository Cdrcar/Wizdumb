import { React, useState } from "react";
import AuthService from "../utils/auth";
import brainLogo from "../assets/logo.png";
import { Link } from "react-router-dom";
import LoggedOutNav from "./LoggedOutNav";
import { useSelector } from "react-redux";
import LoggedInNav from "./LoggedInNav";

const Navbar = () => {
  // Select authentication state
  const auth = useSelector((state) => state.AuthService);

  // Check is user is logged in
  const loggedIn = AuthService.loggedIn();
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
        <div className="">
          {/* Courses */}
          <ul>{loggedIn ? <LoggedInNav /> : <LoggedOutNav />}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
