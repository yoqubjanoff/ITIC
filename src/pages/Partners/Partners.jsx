import { Container } from "./styles";
import { HeadingOne, Paragraph } from "../../styled/styles";
import { useEffect, useState } from "react";
import request from "../../services";

const Partners = () => {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCallReq = async () => {
    try {
      setLoading(true);
      const res = await request.get(`public/partner`);
      setPartners(res?.data?.data);
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
    <Container id="our-partners">
      <Container.Wrapper>
        <Container.TextWrap>
          <HeadingOne>Our Partners</HeadingOne>
          <Paragraph color="#121212">
            Become a member of a freelancer's pool and work on creative projects
          </Paragraph>
        </Container.TextWrap>
        <Container.ImgWrap>
          {partners.slice(0, 6)?.map((items, index) => {
            return (
              <Container.Img key={index}>
                <img
                  className="partners-img"
                  src={items?.partnerPhotoUrl}
                  alt="partners  logo"
                />
              </Container.Img>
            );
          })}
        </Container.ImgWrap>
        
      </Container.Wrapper>
    </Container>
  );
};

export default Partners;
