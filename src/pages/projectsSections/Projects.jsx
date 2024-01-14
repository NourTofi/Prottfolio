import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import Intro from "./IntroSection";
import Project from "./ProjectsSuction";

function Projects() {
  useEffect(()=>{
    window.scroll(0,0)
  },[])
  return (
    <Layout>
      <Intro />
      <Project />
    </Layout>
  );
}

export default Projects;
