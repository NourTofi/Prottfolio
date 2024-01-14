import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import AOS from "aos";
AOS.init({
  duration:1000
});
function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="content font-mont">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
