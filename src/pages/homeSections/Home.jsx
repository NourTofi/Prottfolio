import React from "react";
import Layout from "../../components/Layout";
import Intro from "./IntroSection";
import Technologies from "./TechnologiesSection";
import ReactBuff from "./ReactBuffSection";
import MyDevStack from "./MyDevStackSection";
import DevInfo from "./DevInfoSection";

function Home() {
  return (
    <Layout>
      <div>
        <Intro />
        <Technologies />
        <ReactBuff />
        <MyDevStack />
        <DevInfo/>
      </div>
    </Layout>
  );
}

export default Home;
