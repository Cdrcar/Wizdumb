import { React, useState } from "react";
import { Link } from "react-router-dom";
import Login from "./login";
import { FiMenu } from "react-icons/fi";

const LoggedOutNav = () => {
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  // Show Login modals
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setOpen(false);
  };

  return (
    <div onMouseLeave={handleMouseLeave}>
      <FiMenu
        className="sm:hidden block h-6 w-6 cursor-pointer"
        onMouseEnter={handleMouseEnter}
      />
      <div
        className={`${
          open
            ? "block absolute right-0 mr-2 bg-white border border-gray-300 "
            : "hidden"
        } sm:flex sm:flex-row sm:mr-10`}
      >
        <li
          className={`${
            open
              ? "p-2 hover:bg-sky-400 hover:bg-opacity-25 relative text-sm pl-5 pr-5"
              : "mr-5  mt-1"
          } cursor-pointer sm:mt-2`}
        >
          <Link to="/my-courses">Courses</Link>
        </li>
        <li
          className={`${
            open
              ? "p-2 hover:bg-sky-400 hover:bg-opacity-25 relative text-sm pl-5 pr-5"
              : "mr-5  mt-1"
          } cursor-pointer sm:mt-2`}
          onClick={() => setShowLoginModal(true)}
        >
          Login
        </li>
        <li
          className={`${
            open
              ? "p-2 hover:bg-sky-400 hover:bg-opacity-25 relative text-sm pl-5 pr-5"
              : "mr-5  mt-1"
          } cursor-pointer sm:border sm:rounded-full sm:border-gray-300 sm:p-1 sm:pr-3 sm:pl-3 sm:hover:text-white sm:hover:bg-rose-600 sm:hover:border-rose-600sm:mt-2`}
        >
          <Link to="/signup">Sign Up</Link>
        </li>
        <Login
          isVisible={showLoginModal}
          onClose={() => setShowLoginModal(false)}
        />
      </div>
    </div>
  );
};

export default LoggedOutNav;
