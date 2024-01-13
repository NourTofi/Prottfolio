import React from "react";
import Layout from "../../components/Layout";
import Intro from "./IntroSection";
import Technologies from "./TechnologiesSection";
import ReactBuff from "./ReactBuffSection";
import MyDevStack from "./MyDevStackSection";

function Home() {
  return (
    <Layout>
      <div>
        <Intro />
        <Technologies />
        <ReactBuff />
        <MyDevStack />
      </div>
    </Layout>
  );
}

export default Home;
