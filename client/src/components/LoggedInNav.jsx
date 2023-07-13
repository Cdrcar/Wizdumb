import { React, useState } from "react";
import { Link } from "react-router-dom";
import { BiCog } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import AuthService from "../utils/auth";

const LoggedInNav = () => {
  const [open, setOpen] = useState(false);
  const handleLogout = () => {
    AuthService.logout();
  };
  return (
    <div>
      <div className="flex flex-row mr-10">
        <li className="mr-5 mt-1 hover:cursor-pointer">
          <Link to="/my-courses">Courses</Link>
        </li>
        <li className="mr-5 mt-1 hover:cursor-pointer">Community</li>
        <li className="mr-5 mt-1 pt-1 hover:cursor-pointer">
          <Link to="/profilesettings">
            <BiCog className="text-xl" />
          </Link>
        </li>
        <div className="relative">
          <div className="flex flex-row">
            <li className="mt-1 pt-1 hover:cursor-pointer">
              <Link to="/home">
                <BsFillPersonFill className="text-lg" />
              </Link>
            </li>
            <li
              className="mr-5 mt-1 pt-1 hover:cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
            </li>
          </div>
          <ul
            className={`mt-2 overflow-y-auto ${
              open ? "visible max-h-60" : "invisible max-h-0"
            } absolute right-0 bg-white border border-gray-300`}
          >
            <li className="p-2 hover:bg-sky-400 hover:bg-opacity-25 relative text-sm pl-5 pr-5 cursor-pointer">
              My Courses
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
