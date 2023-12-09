import React, { useEffect, useRef } from "react";
import { Container, HeadingOneFor, Paragraph } from "./styles";
import globe from "../../assets/images/globe.png";
import building from "../../assets/images/building.svg";
import freelancer from "../../assets/images/freelancer.svg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const For = () => {
  const forSectionRef = useRef([]);
  const globalImgRef = useRef(null);
  const buildImgRef = useRef(null);
  const peopleImgRef = useRef(null);

  useEffect(() => {
    const forSection = forSectionRef.current;
    const globalImg = globalImgRef.current;
    const buildImg = buildImgRef.current;
    const peopleImg = peopleImgRef.current;

    gsap.set([globalImg, buildImg, peopleImg], { opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: forSection,
        start: "top center",
        end: "bottom center",
        toggleActions: "restart none none none",
      },
    });

    tl.fromTo(
      globalImg,
      { y: 350, width: 0 },
      { y: 30, width: "381px", opacity: 1, ease: "power2.out", duration: 1.5}
    )
      .fromTo(
        buildImg,
        { y: 350, width: 0 },
        { y: 0, width: "381px", opacity: 1, ease: "power2.out", duration: 1.5 },
        "<"
      )
      .fromTo(
        peopleImg,
        { y: 350, width: 0 },
        { y: 0, width: "381px", opacity: 1, ease: "power2.out", duration: 1.5 },
        "<"
      );

    const scrollTrigger = ScrollTrigger.getById(forSection.id);
    if (scrollTrigger) {
      scrollTrigger.kill();
    }

    ScrollTrigger.create({
      id: forSection.id,
      trigger: forSection,
      start: "top top",
      end: "bottom center",
      toggleActions: "play none none reverse",
      onEnter: () => {
        tl.restart();
      },
    });

    return () => {
      tl.kill();
      ScrollTrigger.getById(forSection.id).kill();
    };
  }, []);

  return (
    <Container id="services" ref={forSectionRef}>
      <Container.Wrapper>
        <Container.Box>
          <Container.Text>
            <Container.Number>01</Container.Number>
            <HeadingOneFor>Global Customers</HeadingOneFor>
            <Paragraph>
              Connect with a growing workforce and companies in the field of
              software development and animation to ensure the quality and
              competitive price of the final product
            </Paragraph>
          </Container.Text>
          <img
            className="forImgGlobe"
            ref={globalImgRef}
            src={globe}
            alt="for"
          />
        </Container.Box>

        <Container.Box>
          <Container.Text>
            <Container.Number>02</Container.Number>
            <HeadingOneFor>IT Companies</HeadingOneFor>
            <Paragraph width="495px">
              Join our network of leading IT companies to export your services
              with our assistance and generate revenue
            </Paragraph>
          </Container.Text>
          <img
            className="buildingImg"
            ref={buildImgRef}
            src={building}
            alt="for"
          />
        </Container.Box>

        <Container.Box>
          <Container.Text>
            <Container.Number>03</Container.Number>
            <HeadingOneFor>Freelancers</HeadingOneFor>
            <Paragraph max-width="495px">
              Become a member of a freelancer's pool and work on creative
              projects
            </Paragraph>
          </Container.Text>
          <img
            className="personImg"
            ref={peopleImgRef}
            src={freelancer}
            alt="for"
          />
        </Container.Box>
      </Container.Wrapper>
    </Container>
  );
};

export default For;
