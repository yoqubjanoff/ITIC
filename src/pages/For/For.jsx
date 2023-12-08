import React, { useEffect, useRef } from "react";
import { Container, HeadingOneFor, Paragraph } from "./styles";
import globe from "../../assets/images/globe.png";
import building from "../../assets/images/building.svg";
import freelancer from "../../assets/images/freelancer.svg";
import gsap from "gsap";

// ScrollTriggerni ham yuklab olish
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const For = () => {
  const myImgRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: myImgRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        toggleAction: "restart none none none", // restart, yuqori tomoni, past tomoni, yonida
      },
    });

    // Qo'shilgan qismi animatsiyasini boshlash
    tl.fromTo(
      ".forImgGlobe",
      { y: 350, width: 0, opacity: 0 },
      { y: 30, width: "281px", opacity: 1, ease: "power2.out", duration: 1 }
    );

    tl.fromTo(
      ".buildingImg",
      { y: 350, width: 0, opacity: 0 },
      {
        y: 0,
        width: "281px",
        opacity: 1,
        ease: "power2.out",
        duration: 1,
      },
      "<"
    );

    tl.fromTo(
      ".personImg",
      { y: 350, width: 0, opacity: 0 },
      {
        y: 0,
        width: "281px",
        opacity: 1,
        ease: "power2.out",
        duration: 1,
      },
      "<"
    );
    return () => tl.kill();
  }, []);

  return (
    <Container id="services" ref={myImgRef}>
      <Container.Wrapper>
        <Container.Box >
          <Container.Text>
            <Container.Number>01</Container.Number>
            <HeadingOneFor>Global Customers</HeadingOneFor>
            <Paragraph>
              Connect with a growing workforce and companies in the field of
              software development and animation to ensure the quality and
              competitive price of the final product
            </Paragraph>
          </Container.Text>
          <img className="forImgGlobe" src={globe} alt="for" />
        </Container.Box>

        <Container.Box >
          <Container.Text>
            <Container.Number>02</Container.Number>
            <HeadingOneFor>IT Companies</HeadingOneFor>
            <Paragraph width="495px">
              Join our network of leading IT companies to export your services
              with our assistance and generate revenue
            </Paragraph>
          </Container.Text>
          <img className="buildingImg" src={building} alt="for" />
        </Container.Box>

        <Container.Box >
          <Container.Text>
            <Container.Number>03</Container.Number>
            <HeadingOneFor>Freelancers</HeadingOneFor>
            <Paragraph max-width="495px">
              Become a member of a freelancer's pool and work on creative
              projects
            </Paragraph>
          </Container.Text>
          <img className="personImg" src={freelancer} alt="for" />
        </Container.Box>
      </Container.Wrapper>
    </Container>
  );
};

export default For;
