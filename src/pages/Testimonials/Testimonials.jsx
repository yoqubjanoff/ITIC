import {
  HeadingOne,
  Paragraph,
  ScrollAnimationOne,
  ScrollAnimationTwo,
  Wrapper,
} from "../../styled/styles";

import { Container } from "./styles";
import { useState } from "react";
import { useEffect } from "react";
import request from "../../services";

function Testimonials() {
  const [teamData, setTeamData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCallReq = async () => {
    try {
      setLoading(true);
      const res = await request.get(`public/testomonial`);
      setTeamData(res?.data?.data);
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
    <Container id="testomonials">
      <Container.Wrapper>
        <Container.TextWrap>
          <HeadingOne>Testimonials</HeadingOne>
          <Paragraph color="#fff" width={'100%'}>
            Become a member of a freelancer's pool and work on creative projects
          </Paragraph>
        </Container.TextWrap>
        <Container.Carousel>
          <Wrapper>
            <ScrollAnimationOne>
              {teamData?.map((items, id) => {
                return (
                  <Container.TestiBox key={id}>
                    <Container.Above>
                      <img
                        className="testiImg"
                        src={items?.testomonialPhotoUrl}
                        alt="client"
                      />
                      <div>
                        <h3>
                          {items?.name} {items?.surname}
                        </h3>
                        <p>{items?.companyName}</p>
                      </div>
                    </Container.Above>
                    <div>{items?.content}</div>
                  </Container.TestiBox>
                );
              })}
            </ScrollAnimationOne>
            <ScrollAnimationOne>
              {teamData?.map((items, id) => {
                return (
                  <Container.TestiBox key={id}>
                    <Container.Above>
                      <img
                        className="testiImg"
                        src={items?.testomonialPhotoUrl}
                        alt="client"
                      />
                      <div>
                        <h3>
                          {items?.name} {items?.surname}
                        </h3>
                        <p>{items?.companyName}</p>
                      </div>
                    </Container.Above>
                    <div>{items?.content}</div>
                  </Container.TestiBox>
                );
              })}
            </ScrollAnimationOne>
          </Wrapper>
          <Wrapper>
            <ScrollAnimationTwo>
              {teamData?.map((items, id) => {
                return (
                  <Container.TestiBox key={id}>
                    <Container.Above>
                      <img
                        className="testiImg"
                        src={items?.testomonialPhotoUrl}
                        alt="client"
                      />
                      <div>
                        <h3>
                          {items?.name} {items?.surname}
                        </h3>
                        <p>{items?.companyName}</p>
                      </div>
                    </Container.Above>
                    <div>{items?.content}</div>
                  </Container.TestiBox>
                );
              })}
            </ScrollAnimationTwo>
            <ScrollAnimationTwo>
              {teamData?.map((items, id) => {
                return (
                  <Container.TestiBox key={id}>
                    <Container.Above>
                      <img
                        className="testiImg"
                        src={items?.testomonialPhotoUrl}
                        alt="client"
                      />
                      <div>
                        <h3>
                          {items?.name} {items?.surname}
                        </h3>
                        <p>{items?.companyName}</p>
                      </div>
                    </Container.Above>
                    <div>{items?.content}</div>
                  </Container.TestiBox>
                );
              })}
            </ScrollAnimationTwo>
          </Wrapper>
        </Container.Carousel>
      </Container.Wrapper>
    </Container>
  );
}

export default Testimonials;
