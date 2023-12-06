import { Container, HeadingBranch } from "./styles";
import world from "../../assets/images/world.svg";
import soon from "../../assets/images/soon.png";
import uzbekistan from "../../assets/images/uzb.png";
import singapore from "../../assets/images/singapore.png";

function Branches() {
  return (
    <Container id="branches">
      <Container.Wrapper>
        <Container.Text>
          <HeadingBranch>
            Our branches in different countries
          </HeadingBranch>
          <Container.Paragraph>
            Become a member of a freelancer's pool and work on creative projects
          </Container.Paragraph>
        </Container.Text>

        <div className="image">
          <img
            className="worldImage"
            src={world}
            alt="world map"
            width={"1304px"}
            height={"643px"}
          />
          <img className="soonUsa" src={soon} alt="location" />
          <p className="positiontext1">
            Our branch in USA NewYork will be opened in the near future
          </p>

          <img className="soonBra" src={soon} alt="location" />
          <p className="positiontext2">
            Our branch in Brazil Rio de Janeiro will be opened in the near future
          </p>

          <img className="uzbLoc" src={uzbekistan} alt="location" />
          <p className="positiontext3">
          Tepamasjid, 4, Olimlar, Tashkent 100041
          </p>

          <img className="sinLoc" src={singapore} alt="location" />
          <p className="positiontext4">
            Our branch in Bedok state of the Singapore
          </p>
        </div>
      </Container.Wrapper>
    </Container>
  );
}

export default Branches;
