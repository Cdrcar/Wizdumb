import { React, useState } from "react";
import { Link } from "react-router-dom";
import Login from "./login";
import { FiMenu } from "react-icons/fi";

const LoggedOutNav = () => {
  const [open, setOpen] = useState(false);
  {
    /*Show Login modals*/
  }
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <div>
      <FiMenu
        className="sm:hidden block h-6 w-6 cursor-pointer"
        onClick={() => setOpen(!open)}
      />
      <div className={`${open ? "block" : "hidden"} sm:flex sm:flex-row mr-10`}>
        <li className="mr-5 mt-1 hover:cursor-pointer ">
          <Link to="/my-courses">Courses</Link>
        </li>
        <li
          className="mr-5  mt-1 hover:cursor-pointer"
          onClick={() => setShowLoginModal(true)}
        >
          Login
        </li>
        <li className="border rounded-full border-gray-300 p-1 pr-3 pl-3 hover:cursor-pointer hover:text-white hover:bg-rose-600 hover:border-rose-600">
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
