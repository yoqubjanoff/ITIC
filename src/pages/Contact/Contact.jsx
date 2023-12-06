import bubble from "../../assets/images/bubble.svg";
import { Container, HeadingOne } from "./styles";
import FormModal from "../../components/Modal/FormModal";
import { useState } from "react";
import Button from "../../components/ButtonCont/Button";

function Contact() {
  const [showModal, setShowModal] = useState(false);
  return (
    <Container id="contact-us" >
      <div className="headWrap">
        <HeadingOne maxWidth={'1048px'}>
          Let's talk about your project and feel free to ask, we have
        </HeadingOne>
          <Button
            title="free consultation"
            fontSize="56px"
            btnwidth="518px"
            btnheight="85px"
            aWidth="85px"
            aHeight="85px"
            iconSize="34px"
            onClick={() => setShowModal(true)}
          />
      </div>
      <Container.InfoWrapper>
        <Container.PhoneAndEmail>
          <div>
            <Container.Label>Phone Number:</Container.Label>
            <Container.Info>+998998037373</Container.Info>
          </div>
          <div>
            <Container.Label>Email:</Container.Label>
            <Container.Info>info@itic.uz</Container.Info>
          </div>
        </Container.PhoneAndEmail>
        <div className="address">
          <Container.Label>Address:</Container.Label>
          <Container.Info>
            Tepamasjid, 4, Olimlar, Tashkent 100041
          </Container.Info>
        </div>
      </Container.InfoWrapper>

      <Container.FooterWrapper>
        <p>©2023 all rights reserved</p>
        <p>Developed by: OOO IT Investment center</p>
      </Container.FooterWrapper>
      {/* <Container.Bubble>
        <img className="bubble" src={bubble} alt="bubble"/>
      </Container.Bubble> */}
      <FormModal isVisible={showModal} onClose={() => setShowModal(false)} />
    </Container>
  );
}

export default Contact;
