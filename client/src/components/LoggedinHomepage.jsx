import React from "react";

const LoggedinHomepage = () => {
  return (
    <div className="grid grid-cols-2 mt-10 ml-5 mr-5">
      <div>
        <img src="" alt="profile_img" className="h-10 rounded-full" />
        <div>Username</div>
      </div>
      <div className="flex">
        <label htmlFor="toggle-switch">
          <input
            type="checkbox"
            id="toggle-switch"
            className="cursor-pointer h-32 w-64 rounded-full appearance-none bg-gray-300 bg-opacity-25 border-gray-300 border-2 checked:bg-gray-800 transition duration-200"
          ></input>
        </label>
        <div className="mr-5">In Progress</div>
      </div>
      <div>
        <div>Completed</div>
      </div>
    </div>
  );
};

export default LoggedinHomepage;
