import { React, useState } from "react";
import { Link } from "react-router-dom";
import Login from "./login";

const LoggedOutNav = () => {
  {
    /*Show Login modals*/
  }
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <div className="flex flex-row mr-10">
      <li className="mr-5 mt-1 hover:cursor-pointer">
        <Link to="/my-courses">Courses</Link>
      </li>
      <li
        className="mr-5  mt-1 hover:cursor-pointer"
        onClick={() => setShowLoginModal(true)}
      >
        Login
      </li>
      <li className="border rounded-full border-gray-300 p-1 pr-3 pl-3 hover:cursor-pointer hover:text-white hover:bg-red-500 hover:border-red-500">
        <Link to="/signup">Sign Up</Link>
      </li>
      <Login
        isVisible={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
    </div>
  );
};

export default LoggedOutNav;
