import React, { useEffect, useRef } from "react";
import Job from "../../components/Jobs/Job";
import { HeadingOne, Paragraph } from "../../styled/styles";
import { Container } from "./styles";
import { useState } from "react";
import request from "../../services";
import Button from "../../components/ButtonCase/Button";
import { Link } from "react-router-dom";
import JobModal from "../../components/JobModal/JobModal";
import { Swiper, SwiperSlide } from "swiper/react";
import { FiArrowRight } from "react-icons/fi";
import { Navigation, Pagination } from "swiper/modules";

function Careers() {
  const [testomonial, setTestomonial] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedJobTitle, setSelectedJobTitle] = useState("");
  const [showModal, setShowModal] = useState(false);
  const careerRef = useRef(null);

  useEffect(() => {
    if (careerRef.current) {
      careerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const getCallReq = async () => {
    try {
      setLoading(true);
      const res = await request.get(`public/vacancy`);
      setTestomonial(res?.data?.data);
      setLoading(false);
    } catch (error) {
      console.error("Error", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getCallReq();
  }, []);
  return (
    <Container ref={careerRef} id="careers">
      <Container.Wrapper>
        <Container.Text>
          <HeadingOne maxWidth={"695px"}>
            Careers at IT investments Center
          </HeadingOne>
          <Paragraph color="#fff">
            Become a member of a freelancer's pool and work on creative projects
          </Paragraph>
        </Container.Text>
        <Job />
        <div className="mblRspnsv">
          <Swiper
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".swiper-btn-next",
              prevEl: ".swiper-btn-prev",
              clickable: true,
            }}
            loop={true}
            modules={[Pagination, Navigation]}
          >
            {testomonial.slice(0, 4)?.map((items, index) => {
              return (
                <SwiperSlide
                  key={items.id}
                  style={{
                    display: "flex",
                    alignItems: " center",
                    justifyContent: "center",
                  }}
                >
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
                        <FiArrowRight className="arrowRight" size={"25px"} />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
            <div className="slider-controller">
              <div className="swiper-btn-prev slider-arrow">
                <div className="arrow-back"></div>
              </div>
              <div className="swiper-btn-next slider-arrow">
                <div className="arrow-forward"></div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>
        <Link to={"/allVacancies"}>
          <div className="mobile">
            <Button title="See all" />
          </div>
        </Link>
      </Container.Wrapper>
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
      </ul>
      {showModal && (
        <JobModal
          isVisible={true}
          onClose={() => setShowModal(false)}
          selectedJobTitle={selectedJobTitle}
        />
      )}
    </Container>
  );
}

export default Careers;
