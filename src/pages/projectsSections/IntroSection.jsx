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
        <p className="text-xl text-center font-semibold md:text-lg">
          Ideas are the seeds, execution is the soil. Together, they cultivate
          the projects that I bring to life
        </p>
        <h1
          className="text-4xl text-center font-bold mt-5"
          data-aos="fade-up-right"
        >
          Because
        </h1>
      </div>
      <div className="font-bold text-7xl text-center bg-red-500 mx-20 p-20 text-white rounded-tl-full rounded-br-full md:mx-4 md:text-2xl">
        <h1 data-aos="slide-right">I PERSEVERE UNTIL...</h1>
        <h1 data-aos="slide-left">THE GOAL IS ACHIEVED</h1>
      </div>
    </div>
  );
};

export default IntroSection;
