import React from "react";
import brainLogo from "../assets/brainLogo.json";
import Lottie from "lottie-react";

const Logo = () => {
  return (
    <div className="">
      <div className="flex justify-center">
        <Lottie animationData={brainLogo} />

      </div>
    </div>
  );
};

export default Logo;
