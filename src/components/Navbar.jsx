import React, { useState } from "react";
import logo from "../assets/logo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import instagram from "../assets/instagram1.png";
import telegram from "../assets/telegram1.png";
import email from "../assets/email1.png";
import Fade from "react-reveal/Fade";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="fixed w-full top-0 bg-[#154c49] border-b border-[#FFFFFF] z-50">
        <div className="ease-in-out duration-500 flex justify-between items-center h-[76px] max-w-[1240px] mx-auto px-10 text-white">
          <Fade top>
            <img src={logo} alt="logo" className="w-[50px]" />
            <ul className="hidden md:flex flex-row">
              <a
                href="#home"
                className="mx-3 py-1 hover:text-green-600 ease-in-out duration-200 "
              >
                Home
              </a>
              <a
                href="#about"
                className="mx-3  py-1 hover:text-green-600 ease-in-out duration-200 "
              >
                About us
              </a>
              <a
                href="#services"
                className="mx-3 py-1 hover:text-green-600 ease-in-out duration-200 "
              >
                Services
              </a>
              <a
                href="#mentors"
                className="mx-3 py-1 hover:text-green-600 ease-in-out duration-200 "
              >
                Mentors
              </a>
              <a
                href="#contact"
                className="mx-3 py-1 hover:text-green-600 ease-in-out duration-200 "
              >
                Contact
              </a>
              <a
                className="hover:scale-110 ease-in-out duration-300"
                href="https://www.instagram.com/eliteadmit.uz/"
              >
                <img
                  className="w-[32px] h-[32px] ml-5"
                  src={instagram}
                  alt=""
                />
              </a>
              <a
                className="hover:scale-110 ease-in-out duration-300"
                href="https://t.me/eliteadmit"
              >
                <img className="w-[32px] h-[32px] ml-5" src={telegram} alt="" />
              </a>
              <a
                className="hover:scale-110 ease-in-out duration-300"
                href="mailto:contact@eliteadmit.uz"
              >
                <img className="w-[32px] h-[32px] ml-5" src={email} alt="" />
              </a>
            </ul>
            <div onClick={handleNav} className="block md:hidden cursor-pointer">
              {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
          </Fade>
          <div
            className={
              nav
                ? "fixed left-0 top-0 h-full w-[60%] border-r border-r-white-600 bg-[#154c49] ease-out duration-500"
                : "fixed left-[-100%] top-0 h-full w-[60%] border-r border-r-white-600 bg-[#154c49] ease-in duration-500"
            }
          >
            <img src={logo} alt="logo" className="w-20 m-4" />
            <ul className="uppercase p-4 flex flex-col">
              <a href="#home" className="p-3 border-b border-gray-600">
                Home
              </a>
              <a href="#about" className="p-3 border-b border-gray-600">
                About us
              </a>
              <a href="#services" className="p-3 border-b border-gray-600">
                Services
              </a>
              <a href="#mentors" className="p-3 border-b border-gray-600">
                Mentors
              </a>
              <a href="#contact" className="p-3">
                Contact
              </a>
            </ul>
          </div>
        </div>
      </div>
      <div id="home" className="flex w-full h-[76px] top-0 bg-[#154c49]"></div>
    </>
  );
};

export default Navbar;
