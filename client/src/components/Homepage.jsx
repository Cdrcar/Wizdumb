import React from "react";
import { node } from "../assets";
import brainLogo from "../assets/brainLogo.json";
import Lottie from "lottie-react";

import { Link } from "react-router-dom";

import Logo from "./Logo";
import Course from "./Course";
import courses from "../constants/index.js";
import { useState } from "react";
import { FcSearch } from "react-icons/fc";

const Homepage = () => {
  const [currentSearch, setCurrentSearch] = useState([]);

  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    e.preventDefault();
    if (searchQuery == "") {
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
      <section className="relative w-full h-screen">
        <div className="absolute inset-0 top-[80px] max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5 justify-end">
          <Logo />
          <div className="flex">
            <h1 className="font-black self-center lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-sky-500 text-right mt-10">
              Wiz<span className="text-cyan-700">Dumb</span>
              <p className="font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[30px] ml-2 mt-5 mb-2 text-cyan-700 text-left">
                {message}
                <br className="sm:block" />
                {message2}
              </p>
            </h1>
          </div>
          <div className="pt-20">
            <ul className="text-center flex flex-col">
              <Link to="/login">
                <li
                  className="pb-10 bg-sky-400 border border-sky-400 rounded-full text-white mb-2 hover:bg-white hover:text-sky-400 hover:cursor-pointer hover:border-sky-400"
                  style={{
                    marginLeft: "100px",
                    padding: "5px",
                    width: "150px",
                  }}
                >
                  Login
                </li>
              </Link>
              <Link to="/signup">
                <li
                  className="pb-10 bg-red-500 border border-red-500 rounded-full text-white hover:bg-white hover:text-red-500 hover:cursor-pointer hover:border-red-500"
                  style={{
                    marginLeft: "100px",
                    padding: "5px",
                    width: "150px",
                  }}
                >
                  Sign Up
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </section>
      {/*Render the search Bar*/}
      <div className="2xl:mt-[-450px] xl:mt-[-300px] lg:mt-[-150px]">
        <h3 className="text-center p-2 text-xl font-bold text-cyan-800">
          Search for a course
        </h3>
        <div className="flex justify-center items-center">
          <form className="w-[500px] relative ">
            <div className="relative">
              <div className="bg-gradient-to-r from-green-200 via-green-300 to-blue-500 p-1 rounded-full border-xl">
                <input
                  type="search"
                  placeholder="Search Here"
                  className="w-full rounded-full p-4 bg-slate-700 text-white"
                  onChange={(e) => handleSearch(e)}
                />
                <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-cyan-300 rounded-full mx-2">
                  <FcSearch />
                </button>
              </div>
            </div>
            {currentSearch.length > 0 && (
              <div className="absolute top-20 p-4 bg-blue-100 text-black w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2 hover:pointer-cursor">
                {currentSearch.map((search) => (
                  <span key={search}>{search}</span>
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
          className="font-black text-cyan-700 text-4xl mb-6 mt-10 mx-6"
        >
          Courses
        </h3>
        <div className="grid grid-cols-3 gap-4 px-6">
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
      </div>
    </>
  );
};

export default Homepage;
