import styled from "styled-components";
import background from "../../assets/images/contactBack.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 103vw;
  height: 100vh;
  padding: 100px 0px 32px 115px;
  position: relative;
  background: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 1250px) {
    width: 107vw;
    }
  @media screen and (max-width: 1050px) {
    padding: 100px 0px 32px 60px;
    }

  .headWrap {
    max-width: 1048px;
    @media screen and (max-width: 840px) {
      width: 648px;
    }
    @media screen and (max-width: 653px) {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 21px;
    }
  }
  @media screen and (max-width: 840px) {
    height: 1024px;
    width: 100vw;
    padding-top: 101px;
    padding-left: 40px;
  }
  @media screen and (max-width: 653px) {
    padding: 0;
    height: 700px;
    width: 100vw;
    justify-content: space-around;
    align-items: center;
  }
`;

export const HeadingOne = styled.h1`
    font-size: calc(42px + 30 * (100vw / 1940));
  font-weight: 500;
  margin: 5px;
  max-width: 1048px;
  background: -webkit-linear-gradient(left, black, #fff, black);
  background-size: 1600px 200px;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 500% auto;
  animation: textShine 2s linear infinite;

  @keyframes textShine {
    0% {
      background-position: 0 1600px;
    }
    100% {
      background-position: 1600px 0;
    }
  }
  @media only screen and (max-width: 1050px) {
    max-width: 748px;
  }
  @media only screen and (max-width: 840px) {
    font-size: 42px;
  }

  @media only screen and (max-width: 653px) {
    width: 318px;
    font-size: 32px;
    text-align: center;
  }
`;

Container.BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 12px;
`;

Container.InfoWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  width: 451px;
  height: 128px;
  gap: 24px;
  
  @media screen and (max-width: 653px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    .address {
      text-align: center;
    }
  }
`;

Container.Label = styled.p`
  color: #ffffff;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  opacity: 0.3;
`;

Container.Info = styled.p`
  color: #ffffff;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;

  @media screen and (max-width: 653px) {
    font-size: 16px;
  }
`;

Container.PhoneAndEmail = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  @media screen and (max-width: 653px) {
    flex-direction: column;
    text-align: center;
  }
`;

Container.FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 34px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  opacity: 0.3;
  width: fit-content;
  height: 17px;

  @media screen and (max-width: 840px) {
    position: relative;
    top: 1px;
  }

  @media screen and (max-width: 653px) {
    display: flex;
    flex-direction: column;
    /* top: 216px; */
  }
`;

Container.Bubble = styled.div`
  height: 614px;
  right: 0;
  object-fit: cover;
  position: fixed;
  bottom: -20px;
  width: 699px;
  animation: wabble 2s linear infinite;

  @keyframes wabble {
    0% {
      transform: translateY(-5px);
    }
    50% {
      transform: translateY(-30px);
    }
    100% {
      transform: translateY(-5px);
    }
  }

  @media screen and (max-width: 840px) {
    display: none;
    position: relative;
    height: fit-content;
    width: fit-content;
    right: -250px;
    bottom: -77px;

    .bubble {
      width: 544px;
      height: 485px;
    }
  }

  @media screen and (max-width: 653px) {
    right: 98px;
  }
`;
