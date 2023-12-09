import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "./styles.js";

function About() {

  const aboutRef = useRef([]);
  const aboutTextRef = useRef(null);
  const aboutDescRef = useRef(null);

  useEffect(() => {
    const forSection = aboutRef.current;
    const aboutTX = aboutTextRef.current;
    const aboutDS = aboutDescRef.current;

    gsap.set([aboutTX, aboutDS], { opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: forSection,
        start: "center center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      aboutTX,
      { y: 350, scale: 0},
      { y: 30, scale: 1, opacity: 1, ease: "power2.out", duration: 2}
    )
      .fromTo(
        aboutDS,
        { y: 350, scale: 0 },
        { y: 0, scale:1, opacity: 1, ease: "power2.out", duration: 2},
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
      toggleActions: "restart none none none",
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
    <Container id="about"  ref={aboutRef}>
      <Container.Wrapper>
        <Container.HeadingAbout ref={aboutTextRef}>About Us</Container.HeadingAbout>
        <Container.Data ref={aboutDescRef}>
          <Container.Paragraph >
            Providing intermediary services and connecting companies and
            talented freelancers, ensuring high quality performance and
            affordability. Attracting orders from regions with high demand for
            digital services, and helping to establish service exports among
            local service providers.
          </Container.Paragraph>
          <Container.Numbers>
            <Container.Num>
              +467
              <span>Satisfied customers</span>
            </Container.Num>
            <Container.Num>
              +13
              <span>Fields</span>
            </Container.Num>
            <Container.Num>
              +69
              <span>Technologies</span>
            </Container.Num>
          </Container.Numbers>
        </Container.Data>
      </Container.Wrapper>
     
    </Container>
  );
}

export default About;
