import React from "react";
import Asliddin from "../assets/Asliddin.png";
import Adxamjon from "../assets/Adxamjon.png";
import Davlatali from "../assets/Davlatali.png";
import Maxmudjon from "../assets/Maxmudjon.png";
import Muhammadsodiq from "../assets/Muhammadsodiq.png";
import Nozimjon from "../assets/Nozimjon.png";
import Fade from "react-reveal/Fade";

const Mentors = () => {
  return (
    <div id="mentors" className="w-full bg-white py-[100px] items-center">
      <Fade bottom>
        <h1 className="text-[#154c49] text-center font-bold text-[60px]">
          Mentors
        </h1>
      </Fade>
      <Fade bottom cascade>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1240px] px-[40px] mt-10  mx-auto gap-10">
          <div className="flex flex-col gap-5 items-center  py-5  bg-[#154c49] px-5 hover:scale-105 ease-in-out duration-300">
            <img className="w-full" src={Asliddin} alt="" />
            <div className="w-full text-center text-white gap-3 flex flex-col items-center">
              <h1 className="font-bold text-2xl">Asliddin Ismoilov</h1>
              <p className="text-left">
                <span className="text-center text-green-500 font-bold text-xl">
                  IELTS:7.5 SAT:1470
                </span>
                <br />- Achieving high ranks in International Informatics
                Olympiads, like IOI, APIO, Lutfizadeh <br />- Winning the
                National Informatics Olympiad several times <br />- Winning
                National Zakovat championship <br />- Getting a full-ride
                scholarship from New York University (NYUAD) <br />- Getting
                acceptance from top unis like Case Western Reserve and Purdue{" "}
                <br />
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center py-5  bg-[#154c49] px-5 hover:scale-105 ease-in-out duration-300">
            <img className="w-full" src={Adxamjon} alt="" />
            <div className="w-full text-center text-white gap-3 flex flex-col items-center">
              <h1 className="font-bold text-2xl">Adxamjon Hamidullayev</h1>
              <p className="text-left">
                <span className="text-center text-green-500 font-bold text-xl">
                  IELTS:7.5 SAT:1470
                </span>
                <br />
                - Winner of National Zakovat Championship <br />
                - Winner of Kokand Olympiad and Full ride scholarship from
                Kokand University
                <br />
                - AMO-Gold medal <br />
                - TEDxNamanganPS <br />
                - Full-ride scholarship from Minerva University <br />-
                Acceptance from NYU, University of Bristol, Penn State
                University
              </p>
            </div>
          </div>
          <div className=" flex flex-col gap-5 items-center py-5 bg-[#154c49]  px-5 hover:scale-105 ease-in-out duration-300">
            <img className="w-full" src={Davlatali} alt="" />
            <div className="w-full text-center text-white gap-3 flex flex-col items-center">
              <h1 className="font-bold text-2xl">Davlatali Mallabayev</h1>
              <p className="text-left">
                <span className="text-center text-green-500 font-bold text-xl">
                  IELTS:8.0 SAT:1500
                </span>
                <br />
                - Medalist of AMO, HKIMO, PIMSO, VANDA <br />
                - 2nd place holder in national Water Polo Championship <br />
                - Best Player of in-school Soccer Tournament
                <br />- National Zakovat Champion -NYUAD 27'
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center  py-5  bg-[#154c49] px-5 hover:scale-105 ease-in-out duration-300">
            <img className="w-full" src={Maxmudjon} alt="" />
            <div className="w-full text-center text-white gap-3 flex flex-col items-center">
              <h1 className="font-bold text-2xl">
                Maxmudjon <br /> Siddiqjonov
              </h1>
              <p className="text-left">
                <span className="text-center text-green-500 font-bold text-xl">
                  IELTS:7.5 SAT:1470
                </span>
                <br />
                - VANDA international science olympiad: gold medal
                <br />- PIMSO international olympiad: silver medal <br />-
                National Zakovat Championship winner <br />
                - YouYube video creator/vlogger
                <br />
                - TedxYouthNamangan <br />- UCL, Edinburgh university, New York
                University (NYUSh)
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center py-5  bg-[#154c49] px-5 hover:scale-105 ease-in-out duration-300">
            <img className="w-full" src={Muhammadsodiq} alt="" />
            <div className="w-full text-center text-white gap-3 flex flex-col items-center">
              <h1 className="font-bold text-2xl">Muhammadsodiq Avazbekov</h1>
              <p className="text-left">
                <span className="text-center text-green-500 font-bold text-xl">
                  IELTS:8.0 SAT:1500
                </span>
                <br />
                - American Mathematics Competition: Silver medal <br />-
                Graduated from Namangan Presidential School with a Gold medal{" "}
                <br />
                - Finalist in the selection process for the national team of
                Uzbekistan for IMO
                <br />- Got accepted into Georgia Tech, the University of
                Manchester, the University of Bristol, and Lancaster University
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Mentors;
