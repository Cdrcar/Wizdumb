import React from "react";
import brainLogo from "../assets/brainLogo.json";
import Lottie from "lottie-react";

const Logo = () => {
    return (
        <div className=" justify-center top-[80px] mx-auto sm:px-16 px-6 flex flex-row gap-5 h-64">
          <div className="flex">
            <Lottie animationData={brainLogo} className="h-32 md:h-64 lg:h-80 self-center" />
          </div>
          <div className="flex">
            <h1 className="font-black self-center lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-sky-500 text-right mt-10">
              Wiz<span className="text-cyan-700">Dumb</span>
              <p className="font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[30px] ml-2 mt-5 mb-2 text-cyan-700 text-left">
                Unlock Your Potential
                <br className="sm:block" />
                with Our Courses
              </p>
            </h1>
          </div>
        </div>
    )
};

export default Logo;