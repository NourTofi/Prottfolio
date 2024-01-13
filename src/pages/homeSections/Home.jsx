import React from "react";
import Layout from "../../components/Layout";
import Intro from "./IntroSection";
import Technologies from "./TechnologiesSection";
import ReactBuff from "./ReactBuffSection";

function Home() {
  return (
    <Layout>
      <div>
        <Intro />
        <Technologies />
        <ReactBuff />
      </div>
    </Layout>
  );
}

export default Home;
