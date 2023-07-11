import { React, Fragment } from "react";
import Login from "./login";
import Signup from "./Signup";

import { Link } from "react-router-dom";

import Logo from "./Logo";
import Course from "./Course";
// import courses from "../constants/index.js";
import { useQuery } from "@apollo/client";
import { QUERY_COURSES } from "../utils/queries";

import { useState } from "react";
import { FcSearch } from "react-icons/fc";
import { AiOutlineSchedule } from "react-icons/ai";
import { AiOutlineLaptop } from "react-icons/ai";
import { AiOutlineQuestion } from "react-icons/ai";

const Homepage = () => {
  {
    /*Show Login modal*/
  }
  const [showLoginModal, setShowLoginModal] = useState(false);

  const { loading, error, data } = useQuery(QUERY_COURSES);
  const courses = data?.getCourses || [];
  console.log(data);
  const [currentSearch, setCurrentSearch] = useState([]);
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
  const message = "Unlock Your Potential";
  const message2 = "with our courses";
  return (
    <>
      <section className="relative w-full h-4/6">
        <div className="grid grid-cols-1 sm:grid-cols-3 mt-20 sm:mt-40 inset-0 top-[80px] max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5 justify-end">
          <Logo className="" />
          <div className="text-center">
            <h1 className="font-black self-center lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-sky-500 mt-10 text-center sm:text-right">
              Wiz<span className="text-cyan-700">Dumb</span>
              <p className="font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[30px] ml-2 mt-5 mb-2 text-cyan-700 text-center sm:text-left">
                {message}
                <br className="sm:block" />
                {message2}
              </p>
            </h1>
          </div>
          <div className="pt-20 content-center">
            <ul className="text-center flex flex-col sm:ml-[100px]">
              <li
                id="authButton"
                className="bg-sky-400 border border-sky-400 rounded-full text-white mb-2 hover:bg-white hover:text-sky-400 hover:cursor-pointer hover:border-sky-400 ml-auto mr-auto w-4/12 sm:w-10/12 sm:min-w-full sm:max-w-2xl"
                onClick={() => setShowLoginModal(true)}
              >
                Login
              </li>

              <li
                id="authButton"
                className="bg-red-500 border border-red-500 rounded-full text-white mb-2 hover:bg-white hover:text-red-500 hover:cursor-pointer hover:border-red-500 ml-auto mr-auto w-4/12 sm:w-10/12 sm:min-w-full"
              >
                <Link to="/signup">Sign Up</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        {/*Render the cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 ml-10 mr-10 pb-20 mt-20">
          <div className="border rounded-md pt-5 pb-5 bg-sky-400 border-gray-300 bg-opacity-10 text-center pl-2 pr-2">
            <AiOutlineLaptop className="mx-auto mb-5 text-2xl" />
            Explore your technical interests and advance your skillset
          </div>
          <div className="text-center border border-gray-300 rounded-md pt-5 pb-5 bg-sky-400  bg-opacity-10 pl-2 pr-2">
            <AiOutlineSchedule className="mx-auto mb-5 text-2xl" />
            Flexible Learning. Learn around your schedule
          </div>
          <div className="text-center border rounded-md border-gray-300 pt-5 pb-5 bg-sky-400  bg-opacity-10 pl-2 pr-2">
            <AiOutlineQuestion className="mx-auto mb-5 text-2xl" />
            Use knowledge quizzes to practice while you learn
          </div>
        </div>
      </section>

      {/* Render the search Bar*/}
      <div className=" mb-20">
        <h3 className="text-center  p-2 text-xl font-bold text-cyan-800">
          Search for a course
        </h3>
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
                <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-cyan-300 rounded-full mx-2">
                  <FcSearch />
                </button>
              </div>
            </div>
            {currentSearch.length > 0 && (
              <div className="absolute top-20 p-4 bg-blue-100 text-black font-bold w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2 hover:pointer-cursor">
                {currentSearch.map((search) => (
                  <Link
                    key={search}
                    to={`course/${search}`}
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
      {/* Render the Courses */}
      <div className="relative z-10 mt-10">
        <h3
          id="courses"
          className="font-black text-cyan-700 text-4xl mb-6 mt-10 mx-11"
        >
          Browse Our Courses
        </h3>
        <div className="grid grid-cols-3 gap-4">
          {courses.map((course) => (
            <Course
              key={course.name}
              name={course.name}
              description={course.description}
              icon={course.icon}
              modules={course.modules}
            />
          ))}
        </div>
        <Login
          isVisible={showLoginModal}
          onClose={() => setShowLoginModal(false)}
        />
      </div>
    </>
  );
};

export default Homepage;
