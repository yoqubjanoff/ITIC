import { HeadingOne } from "../../styled/styles.js";
import { Container } from "./styles.js";

function About() {
  return (
    <Container id="about">
      <Container.Wrapper>
        <Container.HeadingAbout>About Us</Container.HeadingAbout>
        <Container.Data>
          <Container.Paragraph>
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
