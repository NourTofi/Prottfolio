import React from "react";
import projectsData from "./ProjectsData";

const ProjectsSuction = () => {
  return (
    <div className="mt-20">
      <div className="grid grid-cols-3 mt-20 md:grid-cols-1 items-center justify-center gap-10 mx-20 md:mx-5">
        {projectsData.map((project) => {
          return (
            <div className="">
              <div className="relative p-10 border-2 text-center rounded-tr-3xl rounded-bl-3xl border-gray-400">
                <img src={project.image} alt="project image" className="w-full h-52 text-center" />
                <div className="absolute flex inset-0 items-center justify-center bg-black rounded-tr-3xl rounded-bl-3xl flex-col opacity-0 hover:opacity-80">
                  <h1 className="text-4xl font-semibold text-white">
                    {project.title}
                  </h1>
                  <button className="border-2 rounded border-white py-2 hover:bg-green-500 px-5 mt-5 text-white">
                    DEMO
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsSuction;
