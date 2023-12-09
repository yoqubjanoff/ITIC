import React, { useEffect, useRef } from "react";
import { HeadingOne, Paragraph } from "../../styled/styles";
import { Container } from "./styles";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


import category1 from "../../assets/images/dir1.svg";
import category2 from "../../assets/images/dir2.svg";
import category3 from "../../assets/images/dir3.svg";
import category4 from "../../assets/images/dir4.svg";

function Directions() {
  const categoriesRef = useRef([]);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const categories = categoriesRef.current;

    gsap.set(categories, { opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: categories,
        start: "top center",
        end: "bottom center",
        toggleActions: "restart none none none",
      },
    });

    tl.to(categories, {
      opacity: 1,
      y: 0,
      rotation: "+=360",
      stagger: 0.5,
      ease: "power2.out",
      duration: 1,
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <Container id="direction">
      <div className="wrapper">
        <div className="textBox">
          <HeadingOne width="538px">Main Directions</HeadingOne>
          <Paragraph>
            Become a member of a freelancer's pool and work on creative projects
          </Paragraph>
        </div>
        <Container.Categories>
          <img
            ref={(el) => (categoriesRef.current[0] = el)}
            src={category1}
            className="catImage"
            alt="category one"
            style={{ transform: "rotate(5deg)" }}
          />
          <img
            ref={(el) => (categoriesRef.current[1] = el)}
            src={category2}
            className="catImage"
            alt="category two"
            style={{ transform: "rotate(-5deg)" }}
          />
          <img
            ref={(el) => (categoriesRef.current[2] = el)}
            src={category3}
            className="catImage"
            alt="category three"
            style={{ transform: "rotate(5deg)" }}
          />
          <img
            ref={(el) => (categoriesRef.current[3] = el)}
            src={category4}
            className="catImage"
            alt="category four"
            style={{ transform: "rotate(-5deg)" }}
          />
        </Container.Categories>
      </div>
    </Container>
  );
}

export default Directions;