import React from "react";
import instagram from "../assets/instagram.png";
import telegram from "../assets/telegram.png";
import email from "../assets/Email.png";

const Social = () => {
  return (
    <div className="fixed z-20 top-[70vh]">
      <div>
        <a href="https://www.instagram.com/eliteadmit.uz/">
          <img className="w-[50px] " src={instagram} alt="" />
        </a>
        <a href="https://t.me/eliteadmit">
          <img className="w-[50px] " src={telegram} alt="" />
        </a>
        <a href="mailto:contact@eliteadmit.uz">
          <img className="w-[50px] " src={email} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Social;
