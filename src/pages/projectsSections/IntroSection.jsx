import React from "react";

const IntroSection = () => {
  return (
    <div className="mt-20">
      <div className="h-screen">
        <div className="h-3/4">
          <lottie-player
            src="https://lottie.host/2747bc96-65d1-4074-ae5a-551f5c6ab770/MaUibJAhzC.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          />
        </div>
        <p className="text-xl text-center font-semibold">
          With ideas projects come from and I can make this ideas happen
        </p>
        <h1 className="text-4xl text-center font-bold mt-5">Because</h1>
      </div>
      <div className="font-bold text-8xl text-center bg-red-500 mx-20 p-20 text-white rounded-tl-full rounded-br-full md:mx-5 md:text-2xl">
        <h1>I DON'T STOP UNTIL...</h1>
        <h1>PROJECT DONE</h1>
      </div>
    </div>
  );
};

export default IntroSection;
