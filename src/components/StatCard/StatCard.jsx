import { Container } from "./styles";
import trendingUp from '../../assets/icons/trendingUp.svg';
import userPlus from '../../assets/icons/userPlus.svg';

function StatCard() {
  return (
    <Container>
      <Container.Wrapper>
        <Container.Title>Visits</Container.Title>
        <Container.Trending>
          <Container.Nums>0</Container.Nums>
          <Container.Bottom>
            <img src={trendingUp} alt="stat icon" />
            <Container.TrendNum>+0%</Container.TrendNum>
          </Container.Bottom>
        </Container.Trending>
      </Container.Wrapper>
      <img src={userPlus} about="plus user"/>
    </Container>
  );
}

export default StatCard;
