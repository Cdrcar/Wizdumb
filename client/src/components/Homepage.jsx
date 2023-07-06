import React from "react";
import { node } from "../assets";
import brainLogo from "../assets/brainLogo.json";
import Lottie from "lottie-react";
import Logo from './Logo';

const Homepage = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="absolute inset-0 top-[80px]  max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5 justify-end">
        <Logo />
        <div className="pt-20">
          <ul className="text-center flex flex-col">
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
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
