import React from "react";
import instagram from "../assets/instagram1.png";
import telegram from "../assets/telegram1.png";
import email from "../assets/email1.png";
import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <div className="w-full text-center p-5 border-t text-white">
      <div className="w-1/2 md:w-1/4 flex flex-row items-center justify-evenly mx-auto my-10">
        <Fade bottom cascade>
          <a
            className="hover:scale-110 ease-in-out duration-300"
            href="https://www.instagram.com/eliteadmit.uz/"
          >
            <img className="w-[40px] h-[40px] " src={instagram} alt="" />
          </a>
          <a
            className="hover:scale-110 ease-in-out duration-300"
            href="https://t.me/eliteadmit"
          >
            <img className="w-[40px] h-[40px] " src={telegram} alt="" />
          </a>
          <a
            className="hover:scale-110 ease-in-out duration-300"
            href="mailto:contact@eliteadmit.uz"
          >
            <img className="w-[40px] h-[40px] " src={email} alt="" />
          </a>
        </Fade>
      </div>
      <a href="https://fribble_plus.t.me">@Fribble 2023</a>
    </div>
  );
};

export default Footer;
