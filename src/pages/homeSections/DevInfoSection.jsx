import React from "react";

const DevInfoSection = () => {
  return (
    <div>
      <h1 className="text-4xl text-gray-700 text-center font-bold">
        Who is Nour
      </h1>
      <div className="h-screen relative text-gray-700">
        <div className="h-full">
          <lottie-player
            src="https://lottie.host/8aa9c1b9-599a-4aad-86b5-d23e1e9d5082/5YhcN6j5yW.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-2xl md:text-xl font-bold">Hi , Hello ,  Nmaste...
            <pre className="text-xl md:text-sm font-mont font-semibold my-5">
                {JSON.stringify({
                    name:"Nour Aldeen Tofi",
                    age: 23,
                    gender:"male",
                    country:"Syria"
                },null,2)}
            </pre>
            </h1>
        </div>
      </div>
    </div>
  );
};

export default DevInfoSection;
