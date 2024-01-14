import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import Intro from "./IntroSection";
import Technologies from "./TechnologiesSection";
import ReactBuff from "./ReactBuffSection";
import MyDevStack from "./MyDevStackSection";
import DevInfo from "./DevInfoSection";

function Home() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Layout>
      <div>
        <Intro />
        <Technologies />
        <ReactBuff />
        <MyDevStack />
        <DevInfo />
      </div>
    </Layout>
  );
}

export default Home;
