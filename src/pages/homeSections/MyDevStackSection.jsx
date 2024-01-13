import React from "react";

const MyDevStackSection = () => {
  return (
    <div className="my-20">
      <div className="text-center h-52 bg-red-500">
        <h1 className="text-white font-bold text-4xl py-10">My DEV Stack</h1>
      </div>
      {/* -mt-20: is the think that make the card at the top of the last div  */}
      <div className="md:mx-5 mx-32 shadow-2xl bg-gray-50 -mt-20 rounded-lg hover:bg-gray-700 hover:text-white">
        <div className="h-96">
          <lottie-player
            src="https://lottie.host/a9fd2468-3be5-4b70-971e-3313c292c576/nuL7a66B8n.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
        <div className="grid grid-cols-2 text-center pb-5 pt-5">
          <div>
            <h1 className="text-xl font-bold border-b-2 border-gray-200">Front End</h1>
            <br />
            <p className="font-semibold mt-2 pb-2">HTML/CSS</p>
            <p className="font-semibold mt-2 pb-2">React</p>
            <p className="font-semibold mt-2 pb-4">JavaScript</p>
          </div>
          <div>
            <h1 className="text-xl font-bold border-b-2 border-gray-200">UI/UX</h1>
            <br/>
            <p className="font-semibold mt-2 pb-2">Bootstrap</p>
            <p className="font-semibold mt-2 pb-2">Tailwind</p>
            <p className="font-semibold mt-2 pb-4">Material UI</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyDevStackSection;
