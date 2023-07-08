import React from "react";
import { node } from "../assets";
import brainLogo from "../assets/brainLogo.json";
import Lottie from "lottie-react";

import { Link } from "react-router-dom";

import Logo from "./Logo";
import Course from "./Course";
import courses from "../constants/index.js";

const Homepage = () => {
  const message = "Unlock Your Potential";
  const message2 = "with our courses"
  return (
    <>
      <section className="relative w-full h-screen">
        <div className="absolute inset-0 top-[80px] max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5 justify-end">
        <Logo message={message} message2={message2}/>
          <div className="pt-20">
            <ul className="text-center flex flex-col">
              <Link to="/login">
                <li
                  className="pb-10 bg-sky-400 border rounded-full text-background mb-2 hover:bg-background hover:text-white hover:cursor-pointer"
                  style={{
                    marginLeft: "100px",
                    padding: "5px",
                    width: "150px",
                  }}
                >
                  Login
                </li>
              </Link>
              <Link to='/signup'>
              <li
                className="pb-10 bg-red-500 border rounded-full text-background hover:bg-background hover:text-white hover:cursor-pointer"
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
