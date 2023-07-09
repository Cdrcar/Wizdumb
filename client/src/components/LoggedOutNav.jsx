import React from "react";

const LoggedOutNav = () => {
  return (
    <div className="flex flex-row mr-10">
      <li className="mr-5 mt-1 hover:cursor-pointer">Courses</li>
      <li className="mr-5  mt-1 hover:cursor-pointer">Login</li>
      <li className="border rounded-full border-gray-300 p-1 pr-3 pl-3 hover:cursor-pointer hover:text-white hover:bg-red-500 hover:border-red-500">
        Sign Up
      </li>
    </div>
  );
};

export default LoggedOutNav;
