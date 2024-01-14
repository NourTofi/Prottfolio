import React from "react";

const IntroSection = () => {
  return (
    <div className="h-screen bg-theme_color">
      <div className="h-screen grid md:grid-cols-1 grid-cols-2 items-center border-4 border-white transform rotate-12 mx-10 md:rotate-0 md:border-0 md:mx-0 bg-theme_color">
        <div className="h-1/2 ">
          <lottie-player
            src="https://lottie.host/f72d364f-99b6-47a1-8a9d-f0b4e3a656fc/5CC8nigGVc.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
        <div className="font-bold text-white md:mx-4 "data-aos='slide-right'>
          <h1 className="text-7xl md:text-4xl border-l-4 border-white pl-2 pb-2 mr-48 md:border-l-0 md:mr-0 md:pl-0 md:pd-0" >
            Hii , I am <b className="text-yellow-500 ">Nour</b>
          </h1>
          <h1 className="text-4xl md:text-xl border-l-4 border-white border-t-4 mr-80 pl-2 pt-2 md:mr-0 md:border-t-0 md:pl-0 md:pt-0 md:border-l-0">
            FrontEnd <b className="text-red-500">Developer</b>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
