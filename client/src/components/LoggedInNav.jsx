import { React, useState } from "react";
import { Link } from "react-router-dom";
import { BiCog } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import AuthService from "../utils/auth";
import { FiMenu } from "react-icons/fi";

const LoggedInNav = () => {
  const [open, setOpen] = useState(false);
  const [mainOpen, setMainOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setMainOpen(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMainOpen(false);
  };

  const handleLogout = () => {
    AuthService.logout();
  };
  return (
    <div onMouseLeave={handleMouseLeave}>
      <FiMenu
        className="sm:hidden block h-6 w-6 cursor-pointer mr-5"
        onMouseEnter={handleMouseEnter}
      />
      <div
        className={`${
          mainOpen
            ? "block absolute right-0 mr-2 bg-white border border-gray-300 "
            : "hidden"
        } sm:flex sm:flex-row sm:mr-1`}
      >
        <li
          className={`${
            mainOpen
              ? "p-2 hover:bg-sky-400 hover:bg-opacity-25 relative text-sm pl-5 pr-5"
              : "mr-5 "
          } cursor-pointer`}
        >
          <Link to="/">Courses</Link>
        </li>
        <li
          className={`${
            mainOpen
              ? "p-2 hover:bg-sky-400 hover:bg-opacity-25 relative text-sm pl-5 pr-5"
              : "mr-5 "
          } cursor-pointer`}
        >
          <Link to="/forum">Forum</Link>
        </li>
        <li
          className={`${
            mainOpen
              ? "p-2 hover:bg-sky-400 hover:bg-opacity-25 relative text-sm pl-5 pr-5"
              : "mr-5"
          } cursor-pointer`}
        >
          <Link to="/profilesettings">
            <BiCog className="text-xl" />
          </Link>
        </li>
        <div className="relative">
          <div className="flex flex-row">
            <li
              className={`${
                mainOpen
                  ? "p-2 hover:bg-sky-400 hover:bg-opacity-25 relative text-sm pl-5 pr-5"
                  : ""
              } cursor-pointer`}
            >
              <Link to="/home">
                <BsFillPersonFill className="text-lg" />
              </Link>
            </li>
            <li
              className="mr-5 pt-1 hover:cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
            </li>
          </div>
          <ul
            className={`overflow-y-auto ${
              open ? "visible max-h-60" : "invisible max-h-0"
            } absolute right-0 bg-white border border-gray-300`}
          >
            <li className="p-2 hover:bg-sky-400 hover:bg-opacity-25 relative text-sm pl-5 pr-5 cursor-pointer">
              <Link to="/home">Profile</Link>
            </li>
            <li
              className="p-2 hover:bg-sky-400 hover:bg-opacity-25 relative text-sm pl-5 pr-5 cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LoggedInNav;
