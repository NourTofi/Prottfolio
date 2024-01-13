import React from "react";
import Layout from "../../components/Layout";
import IntroSection from "./IntroSection";
import Technologies from './TechnologiesSection'

function Home() {
  return (
    <Layout>
      <div>
        
        <IntroSection/>
        <Technologies/>
        
      </div>
    </Layout>
  );
}

export default Home;
