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
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import logo from "../assets/images/itLogo.svg";
import Footer from "../components/Footer/Footer";
import SidebarButton from "../components/SidebarButton/sidebarButton";
import { Link } from "react-router-dom";

function Pages() {
  const [resize, setResize] = useState(0);
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const triggerElement = triggerRef.current;
    const sectionElement = sectionRef.current;

    const updateScrollTrigger = () => {
      if (triggerElement?.offsetWidth >= 840) {
        let scrollWidth = null;
        scrollWidth = sectionElement.offsetWidth - window.innerWidth * 0.54;
        if (window.innerWidth < 1600) {
          scrollWidth = sectionElement.offsetWidth - window.innerWidth * 0.68;
        }
        const duration = scrollWidth / 1000;
        const pinX = gsap.fromTo(
          sectionElement,
          {
            x: 0,
          },
          {
            x: -scrollWidth,
            ease: "none",
            duration: duration,
            scrollTrigger: {
              trigger: triggerElement,
              start: "top top",
              end: "bottom -2999%",
              scrub: 1,
              pin: true,
            },
          }
        );
        return () => {
          pinX.kill();
          window.location.reload();
        };
      } else {
        ScrollTrigger.getAll().forEach((trigger) => {
          trigger.kill();
        });
      }
    };

    updateScrollTrigger();

    const handleResize = () => {
      setResize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [resize]);
  


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
      <div className="scrollSectionOuter">
        <div ref={triggerRef}>
          <div ref={sectionRef} className="scrollSectionInner">
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
        </div>
      </div>
    </div>
  );
}

export default Pages;
