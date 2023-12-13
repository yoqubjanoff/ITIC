import React, { useEffect, useRef } from "react";
import { HeadingOne, Paragraph } from "../../styled/styles";
import { Container } from "./styles";


import category1 from "../../assets/images/dir1.svg";
import category2 from "../../assets/images/dir2.svg";
import category3 from "../../assets/images/dir3.svg";
import category4 from "../../assets/images/dir4.svg";

function Directions() {

 

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
            src={category1}
            className="catImage"
            alt="category one"
            style={{ transform: "rotate(5deg)" }}
          />
          <img
            src={category2}
            className="catImage"
            alt="category two"
            style={{ transform: "rotate(-5deg)" }}
          />
          <img
            src={category3}
            className="catImage"
            alt="category three"
            style={{ transform: "rotate(5deg)" }}
          />
          <img
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