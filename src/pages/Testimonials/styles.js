import styled from "styled-components";
import testiBack2 from "../../assets/images/liquid-cheese.svg";

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${testiBack2});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #fff;
  width: 100vw;
  height: 100vh;
@media screen and (max-width: 1600px){
  padding:  0 50px;
}

  @media screen and (max-width: 840px) {
    width: 100vw;
    height: 860px;
    flex-direction: column;
    gap: 100px;
  }

  @media screen and (max-width: 653px) {
    width: 100vw;
  padding:  0 15px;

  }
  
`;

Container.Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 201px;
  

  @media screen and (max-width: 1441px) {
    gap: 70px;
  }
  @media screen and (max-width: 1000px) {
    gap: 10px;
  }

  @media screen and (max-width: 840px) {
    align-items: flex-start;
    gap: 100px;
    flex-direction: column;
  }
`;

Container.TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 13px;
  @media screen and (max-width: 840px) {
    padding-left: 20px;
  }
`;

Container.TestiBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 426px;
  border-radius: 12px;
  padding: 50px 82px 65px 45px;
  background-color: #fff;
  &:nth-child(odd) {
    background: linear-gradient(
      to right,
      rgb(255, 978, 255) 0%,
      rgba(255, 423, 75, 0) 200%
    );
    background-color: #6c9f9e;
  }
  @media screen and (max-width: 1400px) {
    padding: 36px 31px 30px 24px;
  }
  @media screen and (max-width: 653px) {
    max-width: 355px;
    padding: 36px 31px 30px 24px;
  }
`;

Container.TestiBoxTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 240px;
  width: 426px;
  border-radius: 12px;
  padding: 50px 82px 65px 45px;
  background-color: #fff;
  &:nth-child(odd) {
    background: linear-gradient(
      to left,
      rgb(255, 978, 255) 0%,
      rgba(255, 423, 75, 0) 200%
    );
    background-color: #6c9f9e;
  }
`;

Container.Carousel = styled.div`
  display: flex;
  gap: 5.5px;
  @media screen and (max-width: 840px) {
    flex-direction: column;
    gap: 5px;
  }
`;

Container.Above = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  @media screen and (max-width: 1150px) {
     margin-bottom: 12px;
  }

  .testiImg {
    height: 60px;
    width: 60px;
    object-fit: cover;
    border-radius: 50%;
  }
`;
