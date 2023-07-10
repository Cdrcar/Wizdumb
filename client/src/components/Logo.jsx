import React from "react";
import brainLogo from "../assets/brainLogo.json";
import Lottie from "lottie-react";

const Logo = () => {
  return (
    <div className="justify-center top-[80px] mx-auto sm:px-16 px-6 flex flex-row gap-5 h-64">
      <div className="flex">
        <Lottie
          animationData={brainLogo}
          className="md:w-30 lg:w-60 xl:w-80 self-center"
        />
      </div>
    </div>
  );
};

export default Logo;
