import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import Intro from "./IntroSection";
import ContactUs from "./ContactUsSection";

function Contact() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Layout>
      <div>
        <Intro />
        <ContactUs />
      </div>
    </Layout>
  );
}

export default Contact;
