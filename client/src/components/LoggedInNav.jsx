import { React, useState } from "react";
import { Link } from "react-router-dom";
import { BiCog } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";

const LoggedInNav = () => {
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
        <li className="mr-5 mt-1 pt-1 hover:cursor-pointer">
          <Link to="/home">
            <BsFillPersonFill className="text-lg" />
          </Link>
        </li>
      </div>
    </div>
  );
};

export default LoggedInNav;
