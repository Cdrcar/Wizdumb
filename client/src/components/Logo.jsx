import React from "react";
import brainLogo from "../assets/brainLogo.json";
import Lottie from "lottie-react";

const Logo = () => {
  return (
    <div className="">
      <div className="flex justify-center">
        <Lottie
          animationData={brainLogo}
          className="self-center w-5/12 sm:w-full"
        />
      </div>
    </div>
  );
};

export default Logo;
