import React from "react";
import Layout from "../../components/Layout";
import Intro from "./IntroSection";
import ContactUs from "./ContactUsSection";

function Contact() {
  return (
    <Layout>
      <div>
        <Intro />
        <ContactUs/>
      </div>
    </Layout>
  );
}

export default Contact;
