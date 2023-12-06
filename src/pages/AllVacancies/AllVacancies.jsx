import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import JobModalTwo from "../../components/JobModal copy/JobModal";
import JobModal from "../../components/JobModalAllV/JobModal";
import Button from "../../components/ButtonCombVac/Button";
import request from "../../services";
import { FiArrowRight } from "react-icons/fi";
import { HeadingOne, Paragraph, TextWrap } from "../../styled/styles";
import { Container } from "./styles";
import logo from "../../assets/images/itLogo.svg";
import { Link } from "react-router-dom";
import MainLoading from "../../components/Reusable/MainLoadind";
import Swal from "sweetalert2";



function AllVacancies() {
  const [showModal, setShowModal] = useState(false);
  const [showModalTwo, setShowModalTwo] = useState(false);
  const [selectedJobTitle, setSelectedJobTitle] = useState("");
  const [testomonial, setTestomonial] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("");

  const getCallReq = async () => {
    try {
      setLoading(true);
      const res = await request.get(`public/vacancy`);
      setTestomonial(res?.data?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      Swal.fire("There is a problem with the Internet or with the server");
    }
  };
  useEffect(() => {
    getCallReq();
  }, []);

  useEffect(() => setUrl(window.location.pathname), []);

  const sectionRef = useRef(null);
  const triggerRef = useRef(null);



      let totalCasesWidth = null

      if (window.innerWidth > 1540) {
        totalCasesWidth = testomonial?.length * 24 + 40;
      }
       if (window.innerWidth < 1540) {
        totalCasesWidth = testomonial?.length * 33 + 50;
      }
      if (window.innerWidth < 840) {
        totalCasesWidth = ''
      }
 

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const triggerElement = triggerRef.current;
    const sectionElement = sectionRef.current;

    if (triggerElement?.offsetWidth >= 840) {
      const scrollWidth = sectionElement.offsetWidth - window.innerWidth;
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
            end: "bottom top",
            scrub: 1,
            pin: true,
          },
        }
      );
      return () => {
        pinX.kill();
      };
    } else {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    }
  }, [triggerRef.current?.offsetWidth >= 840, totalCasesWidth]);

  return (
    <div className="scrollSectionOuter">
      {loading ? (
        <MainLoading/>
      ) : (
        <div ref={triggerRef}>
          <Container ref={sectionRef} style={{ width: `${totalCasesWidth}vw` }}>
            <Link to="/">
              <img className="logo" src={logo} alt="company logo" />
            </Link>
            <TextWrap>
              <HeadingOne maxWidth={'700px'}>
                Careers at IT investments Center
              </HeadingOne>
              <Paragraph color="#fff">
                Become a member of a freelancer's pool and work on creative
                projects
              </Paragraph>
            </TextWrap>
            <div className="wrapper">
              <div className="cntnr">
                {testomonial?.map((items, index) => {
                  return (
                    <div key={index} className="jobBox">
                      <div className="upperPart">
                        <div className="jobTitle">
                          <h3>{items?.title}</h3>
                          <p>{items?.positionLevel}</p>
                        </div>
                        <div className="description">
                          <p>{items?.location}</p>
                          <p>{items?.employmentType}</p>
                          <p>Salary: {items?.salary}</p>
                        </div>
                      </div>
                      <div className="bottomPart">
                        <p>{`from: ${items?.fromTime}, to: ${items?.toTime}`}</p>
                        <div
                          className="arrow"
                          onClick={() => {
                            setSelectedJobTitle(items?.title);
                            setShowModal(true);
                          }}
                        >
                          <FiArrowRight size={"25px"} />
                        </div>
                      </div>
                    </div>
                  );
                })}
                <Container.NoAvaivable>
                  <Container.Text>
                    If you haven't found any suitable opening vacancies, you can
                    register your interest here.
                  </Container.Text>
                  <Button
                    title="Send my resume"
                    fontSize="16px"
                    btnwidth="170px"
                    btnheight="45px"
                    aWidth="45px"
                    aHeight="45px"
                    iconSize="24px"
                    onClick={() => setShowModalTwo(true)}
                  />
                </Container.NoAvaivable>
              </div>
            </div>
            <div className="boxes">
              <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </Container>
          <JobModalTwo
            isVisible={showModalTwo}
            onClose={() => setShowModalTwo(false)}
          />
          {showModal && (
            <JobModal
              isVisible={true}
              onClose={() => setShowModal(false)}
              selectedJobTitle={selectedJobTitle}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default AllVacancies;
