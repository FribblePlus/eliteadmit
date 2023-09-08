import React from "react";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
const Services = () => {
  return (
    <div
      id="services"
      className="flex flex-col items-center max-w-[1240px] gap-10 mx-auto pt-[100px] pb-10"
    >
      <Flip top>
        <h1 className="text-white font-bold text-[60px]">Services</h1>
      </Flip>
      <Fade bottom cascade>
        <div className="w-full flex flex-col lg:flex-row items-center justify-evenly max-w-[1240px] mx-auto gap-5">
          <div className="w-9/12 lg:w-[25%] h-[75vh] bg-white flex flex-col p-5 items-center gap-5 hover:scale-105 ease-in-out duration-300">
            <h1 className="font-bold text-4xl lg:text-2xl text-center uppercase leading-10 lg:leading-5 text-[#154c49]">
              Particular <br></br> Support
            </h1>
            <h2 className="font-bold text-4xl text-center uppercase text-[#154c49]">
              $30-$40
            </h2>
            <ul className="flex flex-col gap-3 text-[15px]">
              <li>✅ Customized support for specific application sections</li>
              <li>✅ Flexibility to choose only what you need</li>
              <li>
                ✅ Diverse options: <br />
                <br />
                <ul className="flex flex-col gap-3">
                  <li className="leading-4">
                    <span className="text-green-500 font-bold">$35</span> -
                    Extracurriculars + Honors+Personal Statement
                  </li>
                  <li>
                    <span className="text-green-500 font-bold">$35</span> -
                    Personal Statement Review
                  </li>
                  <li>
                    <span className="text-green-500 font-bold">$40</span> -
                    Supplementary Essays (Word Limit: 1000)
                  </li>
                  <li>
                    <span className="text-green-500 font-bold">$30</span> - 2
                    Recommendation Letters review
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="w-10/12 lg:w-[30%] h-[80vh] bg-white flex flex-col p-5 items-center gap-5 border-[5px] border-green-400 hover:scale-105 ease-in-out duration-300">
            <h1 className="font-bold text-4xl md:text-2xl text-center uppercase leading-10 lg:leading-5 text-[#154c49]">
              Partial <br></br> Support
            </h1>
            <h2 className="font-bold text-4xl text-center uppercase text-[#154c49]">
              $409
            </h2>
            <ul className="flex flex-col gap-3 text-[15px]">
              <li>✅ Tailored guidance for those with specific needs</li>
              <li>
                ✅ Extracurricular activities, honors, personal statement,
                supplementary essays(Word limit: 1000)
              </li>
              <li>✅ Review of 2 recommendation letters</li>
              <li>✅ Common App review</li>
              <li>✅ 4 hours of personalized mentoring</li>
              <li>
                ✅ Apply to up to 10 universities(Top-300) for El-Yurt Umidi
                Foundation
              </li>
            </ul>
          </div>

          <div className="w-9/12 lg:w-[25%] h-[75vh] bg-white flex flex-col p-5 items-center gap-3 hover:scale-105 ease-in-out duration-300">
            <h1 className="font-bold text-4xl md:text-2xl text-center uppercase leading-10 lg:leading-5 text-[#154c49]">
              Partial <br></br> Support
            </h1>
            <h2 className="font-bold text-4xl text-center uppercase text-[#154c49]">
              $409
            </h2>
            <ul className="flex flex-col gap-3 text-[15px]">
              <li>
                ✅ Comprehensive assistance with every aspect of your
                application
              </li>
              <li>
                ✅ Extracurricular activities, honors, personal statement,
                supplementary essays(No Word Limit), Financial Documents,
                recommendation letters and much more
              </li>
              <li>✅ 6 hours of personalized mentoring</li>
              <li>
                ✅ 5 universities with full scholarship & 5 universities merit
                based awards
              </li>
              <li>✅ CSS profile assistance</li>
              <li>✅ Crafting a compelling application with finesse</li>
            </ul>
          </div>
        </div>
      </Fade>
      <a
        href="https://forms.gle/wSiK4zQeziC41Z8ZA"
        className="text-white font-bold text-[20px] md:text-[40px] ease-in-out duration-200 text-center hover:text-green-500"
      >
        - or apply to financial aid -
      </a>
    </div>
  );
};

export default Services;
