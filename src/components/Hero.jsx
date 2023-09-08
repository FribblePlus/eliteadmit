import React from "react";
import hero from "../assets/Hero.png";
import Fade from "react-reveal/Fade";

const Hero = () => {
  return (
    <Fade bottom>
      <div className=" mt-[5%] flex-row md:flex md:flex-row-reverse justify-between items-center max-w-[1240px] mx-auto px-4 text-white">
        <img src={hero} alt="Hero" className="w-1/2 mx-auto md:w-[30%]" />
        <div className="w-full md:w-[60%] flex flex-col gap-5">
          <h1 className="text-[30px] mx-auto px-8 font-bold text-center uppercase md:text-left lg:text-[50px]">
            Unlocking Your Path to Academic Excellence
          </h1>
          <p className=" font-thin text-center px-8 mx-auto md:text-left">
            Welcome to EliteAdmit: Your Path to Academic Excellence We're here
            to help you reach your dream university. Our expert mentors and
            consultants will guide you with personalized strategies and proven
            success. Whether it's securing scholarships or perfecting your
            application, we've got you covered. Join us on your journey to
            academic excellence today. today.
          </p>
        </div>
      </div>
    </Fade>
  );
};

export default Hero;
