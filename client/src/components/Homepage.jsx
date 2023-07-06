import React from "react";
import { node } from "../assets";
import brainLogo from "../assets/brainLogo.json";

import Lottie from "lottie-react";

const Homepage = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="grid grid-cols-3 absolute inset-0 top-[80px]  max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5 justify-end">
        <div className="mt-2 inset-0">
          <Lottie animationData={brainLogo} />
        </div>
        <div>
          <h1 className="font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-lightblue text-right mt-10">
            Wiz<span className="text-darkblue">Dumb</span>
            <p className="font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[30px] ml-2 mt-5 mb-2 text-darkblue text-left">
              Unlock Your Potential
              <br className="sm:block" />
              with Our Courses
            </p>
          </h1>
        </div>
        <div className="pt-20">
          <ul className="text-center flex flex-col">
            <li
              className="pb-10 bg-lightblue border rounded-full text-background mb-2 hover:bg-background hover:text-lightblue hover:cursor-pointer"
              style={{
                marginLeft: "100px",
                padding: "5px",
                width: "150px",
              }}
            >
              Login
            </li>
            <li
              className="pb-10 bg-accent border rounded-full text-background hover:bg-background hover:text-accent hover:cursor-pointer"
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
