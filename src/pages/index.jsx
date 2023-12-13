import React from "react";
import HorizontalScroll from "react-scroll-horizontal";
import Home from "./Home/Home";
import For from "./For/For";
import About from "./About/About";
import Directions from "../pages/Directions/Directions";
import Cases from "../pages/Cases/Cases";
import Employees from "../pages/Team/Employees";
import Branches from "../pages/Branches/Branches";
import Partners from "../pages/Partners/Partners";
import Testimonials from "../pages/Testimonials/Testimonials";
import Careers from "../pages/Careers/Careers";
import Contact from "../pages/Contact/Contact";
import { Link } from "react-router-dom";
import logo from "../assets/images/itLogo.svg";
import Footer from "../components/Footer/Footer";
import SidebarButton from "../components/SidebarButton/sidebarButton";

function Pages() {
  const scrollToElement = (id) => {
    const elementRef = document.getElementById(id);
    if (elementRef) {
      const element = elementRef.getBoundingClientRect();
      window.scrollTo({
        top: element.x + window.pageYOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <Link to="/">
        <img className="logo" src={logo} alt="company logo" />
      </Link>
      <div className="footer">
        <Footer />
      </div>
      <div className="sideBtn" style={{ position: "fixed", zIndex: "19" }}>
        <SidebarButton scrollToElement={scrollToElement} />
      </div>
      <HorizontalScroll style={{ width: "100%", height: "100vh" }}>
        <div className="scrollSectionInner">
          <Home />
          <For />
          <About />
          <Directions />
          <Cases />
          <Employees />
          <Branches />
          <Partners />
          <Testimonials />
          <Careers />
          <Contact />
        </div>
      </HorizontalScroll>
    </div>
  );
}

export default Pages;
