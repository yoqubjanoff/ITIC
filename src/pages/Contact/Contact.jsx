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
        <p>Developed by:  IT Investment center</p>
      </Container.FooterWrapper>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem consequuntur vel quae molestias recusandae distinctio eos. Velit exercitationem magnam dolorum debitis illo? Reiciendis enim exercitationem voluptatum iure eum modi impedit aspernatur inventore magnam, itaque voluptatem saepe temporibus, illo vero a laborum aliquam. Voluptate ab, accusantium minus atque libero ullam nesciunt in. Eos quam eum culpa laboriosam nostrum ea beatae incidunt delectus, perspiciatis ex nulla ducimus nam a error nobis quisquam architecto, sit ratione harum. Tempore eius enim rerum aspernatur earum consequuntur, est nisi odit, repellendus repudiandae error iure, quibusdam necessitatibus omnis ab aliquid modi officiis perferendis impedit fugit commodi illo!
      {/* <Container.Bubble>
        <img className="bubble" src={bubble} alt="bubble"/>
      </Container.Bubble> */}
      <FormModal isVisible={showModal} onClose={() => setShowModal(false)} />
    </Container>
  );
}

export default Contact;
