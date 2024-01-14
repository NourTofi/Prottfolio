import React from "react";

function ReactBuffSection() {
  return (
    <div className="my-20">
      <div className="text-center h-52 bg-primar">
        <h1 className="text-white font-bold text-4xl py-10">
          Yes You'r Right... I am React Buff
        </h1>
      </div>
      {/* -mt-20: is the think that make the card at the top of the last div  */}
      <div className="md:mx-5 mx-32 shadow-2xl bg-gray-50 -mt-20 rounded-lg hover:bg-gray-700 hover:text-white">
        <div className="h-96" data-aos='zoom-in'>
          <lottie-player
            src="https://lottie.host/8caa30d8-a257-40c0-98a3-c358752b854e/7DQdVOdfaS.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
        <p className="text-xl my-5 font-semibold md:px-5 px-14 py-10">
          React is the most beautiful language to learn.
        </p>
      </div>
    </div>
  );
}

export default ReactBuffSection;
