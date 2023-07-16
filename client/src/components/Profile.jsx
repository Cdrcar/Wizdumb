import React, { useState, useEffect } from "react";
import profileImgDefault from "../assets/profile-image.png";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { QUERY_ME } from "../utils/queries";
import { FaBook } from "react-icons/fa";
import { FcSearch } from "react-icons/fc";
import { RiSettings4Line } from "react-icons/ri";

import Course from "./ProfileCourses";

const Profile = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentSearch, setCurrentSearch] = useState([]);
  const { loading, data, error } = useQuery(QUERY_ME);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading user data</div>;
  }

  const username = data?.me?.username;
  const aboutMe = data?.me?.aboutMe;
  const courses = data?.me?.courses || [];
  const profileImg = data?.me?.profilePhoto;
  const topSkills = data?.me?.topSkills;
  const location = data?.me?.location;

  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();

    e.preventDefault();
    if (searchQuery === "") {
      setCurrentSearch([]);
      return false;
    }
    setCurrentSearch(
      courses
        .filter((course) => course.name.toLowerCase().includes(searchQuery))
        .slice(0, 8)
        .map((course) => course.name)
    );
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 ml-5 mr-5 center text-xl">
      <div>
        <div className="flex justify-center">
          {profileImg ? (
            <img
              src={profileImg}
              alt="profile_img"
              className="inline-block h-40 rounded-full mt-2 mr-2"
            />
          ) : (
            <img
              src={profileImgDefault}
              alt="default_profile_img"
              className="inline-block h-20 rounded-full mt-2 mr-2"
            />
          )}
                   <div className="text-center ml-2">
            <div className="mb-1 mt-5 text-lg font-bold">Hey, {username} &#x1F44B;</div>
            <div className="mb-2 text-sm">{aboutMe}</div>
            <div className="mb-2 text-sm">Top Skills: {topSkills}</div>
            <div className="mb-2 text-sm">Location: {location}</div>

            <Link
              to="/profilesettings"
              className="text-blue-500 hover:text-blue-700 text-sm"
            >
              Edit Profile
            </Link>

            
          </div>
        </div>
        <div>
          <div className="flex justify-center mx-auto space-x-4 mt-20 mb-20"></div>
        </div>

        <div className="flex justify-center items-center mb-20">
          <div className=" mb-20">
            <div className="flex justify-center items-center">
              <form className="w-[500px] relative ">
                <div className="relative">
                  <div className="bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800 p-1 rounded-full border-xl">
                    <input
                      type="search"
                      placeholder="Search Here"
                      className="w-full rounded-full p-4 bg-slate-200 text-black"
                      onChange={(e) => handleSearch(e)}
                    />
                    <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-cyan-300 bg-opacity-25 rounded-full mx-2">
                      <FcSearch />
                    </button>
                  </div>
                </div>
                {currentSearch.length > 0 && (
                  <div className="absolute top-20 p-4 bg-blue-100 text-black font-bold w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2 hover:pointer-cursor">
                    {currentSearch.map((search) => (
                      <Link
                        key={search}
                        to={`/course/${encodeURIComponent(search)}`}
                        className="hover:cursor-pointer"
                      >
                        <span key={search}>{search}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="border-l-2 border-gray-300 pl-5">
        <div className="flex justify-center">
          <div>
            <button
              className={`border rounded-full mt border-gray-300 p-1 pr-3 pl-3 hover:cursor-pointer hover:text-white hover:bg-rose-600 hover:border-rose-600 ${
                selectedCategory === "myCourses" ? "bg-rose-600 text-white" : ""
              }`}
              onClick={() => handleCategoryClick("myCourses")}
            >
              My Courses
            </button>
          </div>
        </div>
        <div className="mt-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {courses.map((course) => (
              <div key={course._id} className="max-w-xs mx-auto">
                <Link to={`/course/${encodeURIComponent(course.name)}`}>
                  <Course
                    name={course.name}
                    icon={course.icon}
                    modules={course.modules}
                    _id={course._id}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
