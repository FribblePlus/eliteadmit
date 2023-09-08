import React from "react";
import about from "../assets/About.png";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div className="w-full m-0 p-0 bg-white">
      <div
        id="about"
        className="max-w-[1240px] mx-auto ease-in-out duration-500 flex flex-col py-[100px] w-full mt-[80px] md:py-[80px] bg-white text-black gap-10"
      >
        <Fade bottom cascade>
          <div className="max-w-[1240px] w-2/3 mx-auto">
            <h1 className="text-[30px] mx-auto text-center md:text-[60px] font-bold md:line-[75px] text-[#154c49]">
              About EliteAdmit: Your College Admission Partners
            </h1>
          </div>
        </Fade>
        <div className="w-5/6 mx-auto flex flex-col gap-5 md:flex-row justify-between items-center">
          <Fade left>
            <img src={about} alt="" className="w-5/6 mx-auto md:w-2/6" />
          </Fade>
          <Fade right>
            <p className="w-5/6 text-left md:w-3/6">
              EliteAdmit is your trusted partner on the journey to higher
              education success. Our experienced team, including former
              admissions officers, provides personalized guidance to help you
              secure admission to top universities. We have a proven track
              record of success, with students receiving scholarships and
              admissions to renowned institutions. Join us on your path to
              academic excellence.
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default About;
